import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupBaseComponent } from './mockup-base.component';

describe('MockupBaseComponent', () => {
  let component: MockupBaseComponent;
  let fixture: ComponentFixture<MockupBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockupBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
