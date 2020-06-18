import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourOfHeroRoutingModule } from './tour-of-hero-routing.module';
import { TourOfHeroComponent } from './tour-of-hero.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [TourOfHeroComponent, CrisisCenterComponent, HeroListComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    TourOfHeroRoutingModule
  ]
})
export class TourOfHeroModule { }
