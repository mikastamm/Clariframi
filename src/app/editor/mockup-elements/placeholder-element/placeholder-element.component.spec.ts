import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderElementComponent } from './placeholder-element.component';

describe('PlaceholderElementComponent', () => {
  let component: PlaceholderElementComponent;
  let fixture: ComponentFixture<PlaceholderElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
