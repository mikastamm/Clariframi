import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPropertyComponent } from './color-property.component';

describe('ColorPropertyComponent', () => {
  let component: ColorPropertyComponent;
  let fixture: ComponentFixture<ColorPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
