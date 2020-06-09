import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsTempsComponent } from './comps-temps.component';

describe('CompsTempsComponent', () => {
  let component: CompsTempsComponent;
  let fixture: ComponentFixture<CompsTempsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompsTempsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompsTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
