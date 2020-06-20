import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../../message.service';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  selectedId: number;
  heroes$: Observable<Hero[]>;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((p) => {
        this.selectedId = +p.get('id');
        return this.heroService.getHeroes();
      })
    );
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }
}
