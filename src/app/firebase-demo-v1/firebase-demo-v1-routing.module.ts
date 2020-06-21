import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
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
