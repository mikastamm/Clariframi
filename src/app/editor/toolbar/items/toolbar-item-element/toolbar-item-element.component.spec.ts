import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarItemElementComponent } from './toolbar-item-element.component';

describe('ToolbarItemElementComponent', () => {
  let component: ToolbarItemElementComponent;
  let fixture: ComponentFixture<ToolbarItemElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarItemElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarItemElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
