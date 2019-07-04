import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrElementComponent } from './hr-element.component';

describe('HrElementComponent', () => {
  let component: HrElementComponent;
  let fixture: ComponentFixture<HrElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
