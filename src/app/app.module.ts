import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { CoreModule } from './core/core.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FirebaseDemoV1Module } from './firebase-demo-v1/firebase-demo-v1.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule,
    AppMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    PagesModule,
    ThemeModule,
    CoreModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyBjExABRmFUnclmMM-Ys9vDvGn9UWoQjd8',
      authDomain: 'firapp-239e2.firebaseapp.com',
      databaseURL: 'https://firapp-239e2.firebaseio.com',
      projectId: 'firapp-239e2',
      storageBucket: 'firapp-239e2.appspot.com',
      messagingSenderId: '675058299355',
      appId: '1:675058299355:web:c47b192fb68263fbd677fe',
      measurementId: 'G-TV77DGC3JT',
    }),
    FirebaseDemoV1Module,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
