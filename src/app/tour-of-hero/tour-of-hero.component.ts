import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-tour-of-hero',
  templateUrl: './tour-of-hero.component.html',
  styleUrls: ['./tour-of-hero.component.css'],
  animations: [slideInAnimation],
})
export class TourOfHeroComponent {
  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
