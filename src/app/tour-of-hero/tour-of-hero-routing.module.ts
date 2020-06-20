// Adding the configured RouterModule to the AppModule is sufficient for minimal route
// configurations. However, as the application grows, refactor the routing configuration
// into a separate file and create a Routing Module. A routing module is a special type
// of Service Module dedicated to routing.
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  {
    path: 'admin',
    loadChildren: () =>
      import(`./admin/admin.module`).then((m) => m.AdminModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'crisis-center',
    loadChildren: () =>
      import('./crisis-center/crisis-center.module').then(
        (m) => m.CrisisCenterModule
      ),
    data: { preload: true },
  },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class TourOfHeroRoutingModule {}
