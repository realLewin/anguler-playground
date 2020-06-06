import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutTestComponent } from './put-test.component';

describe('PutTestComponent', () => {
  let component: PutTestComponent;
  let fixture: ComponentFixture<PutTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
