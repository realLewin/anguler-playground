import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  canActivate,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { map } from 'rxjs/operators';

import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WritePostComponent } from './write-post/write-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const redirectUnauthorizedToWelcome = () => redirectUnauthorizedTo(['welcome']);
const redirectLoggedUserToHome = () => redirectLoggedInTo(['']);
const onlyAllowSelf = (next) =>
  map((user) => !!user && (user as any).uid === next.params.id);

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
    path: 'example',
    loadChildren: () =>
      import(`./example/firestore/firestore.module`).then(
        (m) => m.FirestoreModule
      ),
  },
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToWelcome,
    },
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    ...canActivate(onlyAllowSelf),
  },
  {
    path: '',
    ...canActivate(redirectUnauthorizedToWelcome),
    children: [
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
      // {
      //   path: 'add',
      //   loadChildren: () =>
      //     import(`./add-friends/add-friends.module`).then(
      //       (m) => m.AddFriendsModule
      //     ),
      // },
      {
        path: 'setting',
        loadChildren: () =>
          import(`./setting/settings.module`).then((m) => m.SettingsModule),
      },
      {
        path: 'logout',
        loadChildren: () =>
          import(`./logout/logout.module`).then((m) => m.LogoutModule),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true,
      // preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class FirebaseDemoV1RoutingModule {}

// const redirectToProfile = () =>
//   map((user) =>
//     user ? ['firebase-demo-v1', 'profile', (user as any).uid] : true
//   );

// const onlyAllowSelf = (next) =>
//   map((user) => (!!user && next.params.id == (user as any).uid) || ['login']);
