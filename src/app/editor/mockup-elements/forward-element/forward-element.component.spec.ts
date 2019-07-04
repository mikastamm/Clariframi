import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardElementComponent } from './forward-element.component';

describe('ForwardElementComponent', () => {
  let component: ForwardElementComponent;
  let fixture: ComponentFixture<ForwardElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
