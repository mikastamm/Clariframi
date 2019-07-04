import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPropertyComponent } from './dropdown-property.component';

describe('DropdownPropertyComponent', () => {
  let component: DropdownPropertyComponent;
  let fixture: ComponentFixture<DropdownPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
