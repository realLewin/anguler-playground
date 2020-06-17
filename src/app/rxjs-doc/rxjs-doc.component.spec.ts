import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDocComponent } from './rxjs-doc.component';

describe('RxjsDocComponent', () => {
  let component: RxjsDocComponent;
  let fixture: ComponentFixture<RxjsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
