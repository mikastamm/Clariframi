import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCategoryElementComponent } from './toolbar-category-element.component';

describe('ToolbarCategoryElementComponent', () => {
  let component: ToolbarCategoryElementComponent;
  let fixture: ComponentFixture<ToolbarCategoryElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarCategoryElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarCategoryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
