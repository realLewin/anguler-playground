import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOfHeroComponent } from './tour-of-hero.component';

describe('TourOfHeroComponent', () => {
  let component: TourOfHeroComponent;
  let fixture: ComponentFixture<TourOfHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourOfHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourOfHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
