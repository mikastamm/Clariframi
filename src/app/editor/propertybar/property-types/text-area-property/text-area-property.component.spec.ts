import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaPropertyComponent } from './text-area-property.component';

describe('TextAreaPropertyComponent', () => {
  let component: TextAreaPropertyComponent;
  let fixture: ComponentFixture<TextAreaPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
