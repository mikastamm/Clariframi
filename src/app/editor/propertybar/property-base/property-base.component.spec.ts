import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBaseComponent } from './property-base.component';

describe('PropertyBaseComponent', () => {
  let component: PropertyBaseComponent;
  let fixture: ComponentFixture<PropertyBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
