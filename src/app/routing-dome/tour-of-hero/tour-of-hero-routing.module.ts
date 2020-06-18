// Adding the configured RouterModule to the AppModule is sufficient for minimal route
// configurations. However, as the application grows, refactor the routing configuration
// into a separate file and create a Routing Module. A routing module is a special type
// of Service Module dedicated to routing.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourOfHeroComponent } from './tour-of-hero.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: 'crisis', component: CrisisCenterComponent },
  // { path: 'hero', component: HeroListComponent },
  // { path: '', redirectTo: 'hero', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
  {
    path: '',
    component: TourOfHeroComponent,
    children: [
      { path: 'crisis', component: CrisisCenterComponent },
      { path: 'hero', component: HeroListComponent },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourOfHeroRoutingModule {}
