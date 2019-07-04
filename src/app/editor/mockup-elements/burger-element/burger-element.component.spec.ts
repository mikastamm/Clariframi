import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerElementComponent } from './burger-element.component';

describe('BurgerElementComponent', () => {
  let component: BurgerElementComponent;
  let fixture: ComponentFixture<BurgerElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
