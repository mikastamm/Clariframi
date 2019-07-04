import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilebuttonElementComponent } from './mobilebutton-element.component';

describe('MobilebuttonElementComponent', () => {
  let component: MobilebuttonElementComponent;
  let fixture: ComponentFixture<MobilebuttonElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilebuttonElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilebuttonElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
