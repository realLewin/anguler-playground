import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetRouteInfoComponent } from './get-route-info/get-route-info.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Page1ChildComponent } from './page1-child/page1-child.component';

// The order of routes is important because the Router uses a first-match
// wins strategy when matching routes

//page1 html demostrate using the relative path

const routes: Routes = [
  {
    path: 'tour-of-hero',
    loadChildren: () =>
      import(`./tour-of-hero/tour-of-hero.module`).then(
        (m) => m.TourOfHeroModule
      ),
  },
  {
    path: 'page1',
    component: Page1Component,
    children: [{ path: 'page1-child', component: Page1ChildComponent }],
  },
  { path: 'page2', component: Page2Component },
  { path: 'get-info/:name', component: GetRouteInfoComponent },
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingDomeRoutingModule {}
