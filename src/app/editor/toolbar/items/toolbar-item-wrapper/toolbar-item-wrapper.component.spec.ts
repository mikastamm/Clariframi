import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarItemWrapperComponent } from './toolbar-item-wrapper.component';

describe('ToolbarItemWrapperComponent', () => {
  let component: ToolbarItemWrapperComponent;
  let fixture: ComponentFixture<ToolbarItemWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarItemWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarItemWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
