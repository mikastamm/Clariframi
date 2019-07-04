import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioPropertyComponent } from './radio-property.component';

describe('RadioPropertyComponent', () => {
  let component: RadioPropertyComponent;
  let fixture: ComponentFixture<RadioPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
