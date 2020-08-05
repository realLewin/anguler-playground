import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'infinite-scroll',
    loadChildren: () =>
      import(`./infinite-scroll/infinite-scroll.module`).then(
        (m) => m.InfiniteScrollModule
      ),
  },
  {
    path: 'scroll',
    loadChildren: () =>
      import(`./scroll/scroll.module`).then((m) => m.ScrollModule),
  },
  {
    path: 'intersection-observer',
    loadChildren: () =>
      import(`./intersection-observer/intersection-observer.module`).then(
        (m) => m.IntersectionObserverModule
      ),
  },
  {
    path: 'carousel',
    loadChildren: () =>
      import(`./carousel/carousel.module`).then((m) => m.CarouselModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WebTechRoutingModule {}
