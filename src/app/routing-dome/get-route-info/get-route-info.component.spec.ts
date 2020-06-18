import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRouteInfoComponent } from './get-route-info.component';

describe('GetRouteInfoComponent', () => {
  let component: GetRouteInfoComponent;
  let fixture: ComponentFixture<GetRouteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRouteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRouteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
