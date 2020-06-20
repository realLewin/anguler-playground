import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TourOfHeroRoutingModule } from './tour-of-hero-routing.module';
import { TourOfHeroComponent } from './tour-of-hero.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    TourOfHeroComponent,
    CrisisCenterComponent,
    PageNotFoundComponent,
  ],
  // Notice that in the module imports array, the AppRoutingModule is last and comes after the
  // HeroesModule.
  // The order of route configuration is important because the router accepts the first route
  // that matches a navigation request path.
  imports: [
    CommonModule,
    HeroesModule,
    TourOfHeroRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [TourOfHeroComponent],
})
export class TourOfHeroModule {}
