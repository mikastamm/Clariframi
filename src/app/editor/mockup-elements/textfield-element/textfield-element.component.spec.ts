import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldElementComponent } from './textfield-element.component';

describe('TextfieldElementComponent', () => {
  let component: TextfieldElementComponent;
  let fixture: ComponentFixture<TextfieldElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
