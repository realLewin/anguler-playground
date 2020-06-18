import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';
import {
  AngularFireAuthGuard,
  // redirectUnauthorizedTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { FirebaseDemoV1Component } from './firebase-demo-v1.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { ExampleComponent } from './example/example.component';

// const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const redirectToProfile = () =>
  map((user) =>
    user ? ['firebase-demo-v1', 'profile', (user as any).uid] : true
  );

const onlyAllowSelf = (next) =>
  map((user) => (!!user && next.params.id == (user as any).uid) || ['login']);

const routes: Routes = [
  { path: '', component: FirebaseDemoV1Component },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToProfile),
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: onlyAllowSelf },
  },
  { path: 'chat', component: ChatComponent },
  { path: 'example', component: ExampleComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FirebaseDemoV1RoutingModule {}
