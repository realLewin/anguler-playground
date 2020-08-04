import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  isLoading$: boolean = false;
  tweetData: number[] = [];
  perFetchCount: number = 10;

  constructor() {}

  ngOnInit() {
    this.fetchTweets();
  }

  onScroll() {
    this.fetchTweets();
  }

  private fetchTweets() {
    this.isLoading$ = true;
    for (let i = 0; i < this.perFetchCount; i++) {
      this.tweetData.push(Math.random());
    }
    this.isLoading$ = false;
  }
}
