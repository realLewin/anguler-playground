import { Component, Input } from '@angular/core';
import { Tweet } from '../states/tweet.model';
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent {
  @Input() tweet: Tweet;
}
