import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackElementComponent } from './back-element.component';

describe('BackElementComponent', () => {
  let component: BackElementComponent;
  let fixture: ComponentFixture<BackElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
