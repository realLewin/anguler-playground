import { async, ComponentFixture, fakeAsync, TestBed, tick
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Router } from '@angular/router';

import { addMatchers, newEvent } from '../../testing';

import { getTestHeroes, TestHeroService } from '../model/testing/test-hero.service';

import { HeroModule } from './hero.module';
import { HeroListComponent } from './hero-list.component';
import { HighlightDirective } from '../shared/highlight.directive';
import { HeroService } from '../model/hero.service';

const HEROES = getTestHeroes();

let comp: HeroListComponent;
let fixture: ComponentFixture<HeroListComponent>;
let page: Page;

/////// Tests //////

describe('HeroListComponent', () => {

  beforeEach(async(() => {
    addMatchers();
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [HeroModule],
      providers: [
        { provide: HeroService, useClass: TestHeroService },
        { provide: Router,      useValue: routerSpy}
      ]
    })
    .compileComponents()
    .then(createComponent);
  }));

  it('should display heroes', () => {
    expect(page.heroRows.length).toBeGreaterThan(0);
  });

  it('1st hero should match 1st test hero', () => {
    const expectedHero = HEROES[0];
    const actualHero = page.heroRows[0].textContent;
    expect(actualHero).toContain(expectedHero.id.toString(), 'hero.id');
    expect(actualHero).toContain(expectedHero.name, 'hero.name');
  });

  it('should select hero on click', fakeAsync(() => {
    const expectedHero = HEROES[1];
    const li = page.heroRows[1];
    li.dispatchEvent(newEvent('click'));
    tick();
    // `.toEqual` because selectedHero is clone of expectedHero; see FakeHeroService
    expect(comp.selectedHero).toEqual(expectedHero);
  }));

  it('should navigate to selected hero detail on click', fakeAsync(() => {
    const expectedHero = HEROES[1];
    const li = page.heroRows[1];
    li.dispatchEvent(newEvent('click'));
    tick();

    // should have navigated
    expect(page.navSpy.calls.any()).toBe(true, 'navigate called');

    // composed hero detail will be URL like 'heroes/42'
    // expect link array with the route path and hero id
    // first argument to router.navigate is link array
    const navArgs = page.navSpy.calls.first().args[0];
    expect(navArgs[0]).toContain('heroes', 'nav to heroes detail URL');
    expect(navArgs[1]).toBe(expectedHero.id, 'expected hero.id');

  }));

  it('should find `HighlightDirective` with `By.directive', () => {
    // Can find DebugElement either by css selector or by directive
    const h2        = fixture.debugElement.query(By.css('h2'));
    const directive = fixture.debugElement.query(By.directive(HighlightDirective));
    expect(h2).toBe(directive);
  });

  it('should color header with `HighlightDirective`', () => {
    const h2 = page.highlightDe.nativeElement as HTMLElement;
    const bgColor = h2.style.backgroundColor;

    // different browsers report color values differently
    const isExpectedColor = bgColor === 'gold' || bgColor === 'rgb(255, 215, 0)';
    expect(isExpectedColor).toBe(true, 'backgroundColor');
  });

  it('the `HighlightDirective` is among the element\'s providers', () => {
    expect(page.highlightDe.providerTokens).toContain(HighlightDirective, 'HighlightDirective');
  });
});

/////////// Helpers /////

/** Create the component and set the `page` test variables */
function createComponent() {
  fixture = TestBed.createComponent(HeroListComponent);
  comp = fixture.componentInstance;

  // change detection triggers ngOnInit which gets a hero
  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    // got the heroes and updated component
    // change detection updates the view
    fixture.detectChanges();
    page = new Page();
  });
}

class Page {
  /** Hero line elements */
  heroRows: HTMLLIElement[];

  /** Highlighted DebugElement */
  highlightDe: DebugElement;

  /** Spy on router navigate method */
  navSpy: jasmine.Spy;

  constructor() {
    const heroRowNodes = fixture.nativeElement.querySelectorAll('li');
    this.heroRows = Array.from(heroRowNodes);

    // Find the first element with an attached HighlightDirective
    this.highlightDe = fixture.debugElement.query(By.directive(HighlightDirective));

    // Get the component's injected router navigation spy
    const routerSpy = fixture.debugElement.injector.get(Router);
    this.navSpy = routerSpy.navigate as jasmine.Spy;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/