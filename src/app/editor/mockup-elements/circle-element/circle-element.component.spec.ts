import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleElementComponent } from './circle-element.component';

describe('CircleElementComponent', () => {
  let component: CircleElementComponent;
  let fixture: ComponentFixture<CircleElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
