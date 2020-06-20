import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TourOfHeroRoutingModule } from './tour-of-hero-routing.module';
import { TourOfHeroComponent } from './tour-of-hero.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    TourOfHeroComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  // Notice that in the module imports array, the AppRoutingModule is last and comes after the
  // HeroesModule.
  // The order of route configuration is important because the router accepts the first route
  // that matches a navigation request path.
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AuthModule,
    TourOfHeroRoutingModule,
  ],
  exports: [TourOfHeroComponent],
})
export class TourOfHeroModule {}
