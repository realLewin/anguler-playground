import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {
  redirectUnauthorizedTo,
  canActivate,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WritePostComponent } from './write-post/write-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const redirectUnauthorizedToWelcome = () => redirectUnauthorizedTo(['welcome']);
const redirectLoggedUserToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent,
    ...canActivate(redirectLoggedUserToHome),
  },
  {
    path: 'login',
    loadChildren: () =>
      import(`./login/login.module`).then((m) => m.LoginModule),
    ...canActivate(redirectLoggedUserToHome),
  },
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
    ...canActivate(redirectUnauthorizedToWelcome),
  },
  {
    path: '',
    ...canActivate(redirectUnauthorizedToWelcome),
    // canActivate: [AngularFireAuthGuard],
    // data: {
    //   authGuardPipe: redirectUnauthorizedToWelcome,
    // },
    children: [
      // {
      //   path: 'home',
      //   component: MainPageComponent,
      // },
      {
        path: 'profile/:id',
        component: ProfileComponent,
      },
      {
        path: 'chat',
        loadChildren: () =>
          import(`./chat/chat.module`).then((m) => m.ChatModule),
      },
      {
        path: 'write-post',
        component: WritePostComponent,
      },
      {
        path: 'post-detail',
        component: PostDetailComponent,
      },
      {
        path: 'setting',
        loadChildren: () =>
          import(`./setting/settings.module`).then((m) => m.SettingsModule),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      // preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class FirebaseDemoV1RoutingModule {}

// import { map } from 'rxjs/operators';
// import {
//   AngularFireAuthGuard,
//   // redirectUnauthorizedTo,
//   canActivate,
// } from '@angular/fire/auth-guard';
// const redirectToLogin = () => redirectUnauthorizedTo(['login']);

// const redirectToProfile = () =>
//   map((user) =>
//     user ? ['firebase-demo-v1', 'profile', (user as any).uid] : true
//   );

// const onlyAllowSelf = (next) =>
//   map((user) => (!!user && next.params.id == (user as any).uid) || ['login']);

// const routes: Routes = [
//   { path: '', component: FirebaseDemoV1Component },
//   {
//     path: 'login',
//     component: LoginComponent,
//     ...canActivate(redirectToProfile),
//   },
//   {
//     path: 'profile/:id',
//     component: ProfileComponent,
//     canActivate: [AngularFireAuthGuard],
//     data: { authGuardPipe: onlyAllowSelf },
//   },
//   { path: 'chat', component: ChatComponent },
//   { path: '**', component: LoginComponent },
// ];
