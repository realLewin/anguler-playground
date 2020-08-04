import { TweetsService } from '../states/tweets.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../states/tweet.model';
import { TweetsQuery } from '../states/tweets.query';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css'],
})
export class TweetsComponent implements OnInit {
  tweets$: Observable<Tweet[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private tweetsQuery: TweetsQuery,
    private tweetsService: TweetsService
  ) {}

  ngOnInit() {
    this.fetchTweets();
    this.tweets$ = this.tweetsQuery.selectAll();
    this.isLoading$ = this.tweetsQuery.selectLoading();
  }

  onScroll() {
    this.fetchTweets();
  }

  private fetchTweets() {
    if (this.tweetsQuery.getHasMore()) {
      this.tweetsService.get(this.tweetsQuery.getPage());
    }
  }
}
