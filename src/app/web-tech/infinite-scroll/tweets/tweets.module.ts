import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TweetComponent } from './tweet/tweet.component';
import { TweetsComponent } from './tweets/tweets.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule } from '@angular/router';
// import { SharedModule } from '../shared/shared.module';
import { TweetsRoutingModule } from './tweets-routing.module';

@NgModule({
  declarations: [TweetsComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule,
    // SharedModule,
    TweetsRoutingModule,
  ],
})
export class TweetsModule {}
