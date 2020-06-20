import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { TourOfHeroModule } from './tour-of-hero/tour-of-hero.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
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
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    TourOfHeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
