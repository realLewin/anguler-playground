import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseDemoV1Component } from './firebase-demo-v1.component';

describe('FirebaseDemoV1Component', () => {
  let component: FirebaseDemoV1Component;
  let fixture: ComponentFixture<FirebaseDemoV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseDemoV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseDemoV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
