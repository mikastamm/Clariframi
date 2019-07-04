import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyWrapperComponent } from './property-wrapper.component';

describe('PropertyWrapperComponent', () => {
  let component: PropertyWrapperComponent;
  let fixture: ComponentFixture<PropertyWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
