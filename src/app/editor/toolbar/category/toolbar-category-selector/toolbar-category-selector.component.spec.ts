import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCategorySelectorComponent } from './toolbar-category-selector.component';

describe('ToolbarCategorySelectorComponent', () => {
  let component: ToolbarCategorySelectorComponent;
  let fixture: ComponentFixture<ToolbarCategorySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarCategorySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarCategorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
