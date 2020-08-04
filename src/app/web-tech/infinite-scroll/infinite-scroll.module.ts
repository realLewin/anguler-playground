import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { InfiniteScrollRoutingModule } from './infinite-scroll-routing.module';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [InfiniteScrollComponent, ExampleComponent],
  imports: [CommonModule, InfiniteScrollRoutingModule],
})
export class InfiniteScrollModule {}
