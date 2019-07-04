import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleElementComponent } from './rectangle-element.component';

describe('RectangleElementComponent', () => {
  let component: RectangleElementComponent;
  let fixture: ComponentFixture<RectangleElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
