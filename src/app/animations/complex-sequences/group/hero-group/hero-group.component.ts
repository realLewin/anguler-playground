import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
} from '@angular/animations';
import { HEROES, Hero } from '../../heroes';

@Component({
  selector: 'app-hero-group',
  template: `
    <ul class="heroes">
      <li
        *ngFor="let hero of heroes"
        [@flyInOut]="'in'"
        (click)="removeHero(hero.id)"
      >
        <div class="inner">
          <span class="badge">{{ hero.id }}</span>
          <span>{{ hero.name }}</span>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./hero-group.component.css'],
  animations: [
    trigger('flyInOut', [
      state(
        'in',
        style({
          width: 120,
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('void => *', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate(
            '0.3s 0.1s ease',
            style({
              transform: 'translateX(0)',
              width: 120,
            })
          ),
          animate(
            '0.3s ease',
            style({
              opacity: 1,
            })
          ),
        ]),
      ]),
      transition('* => void', [
        group([
          animate(
            '0.3s ease',
            style({
              transform: 'translateX(50px)',
              width: 10,
            })
          ),
          animate(
            '0.3s 0.2s ease',
            style({
              opacity: 0,
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class HeroGroupComponent {
  @Input() heroes: Hero[];

  @Output() remove = new EventEmitter<number>();

  removeHero(id: number) {
    this.remove.emit(id);
  }
}
