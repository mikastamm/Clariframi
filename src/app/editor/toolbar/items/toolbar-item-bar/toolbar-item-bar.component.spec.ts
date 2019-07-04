import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarItemBarComponent } from './toolbar-item-bar.component';

describe('ToolbarItemBarComponent', () => {
  let component: ToolbarItemBarComponent;
  let fixture: ComponentFixture<ToolbarItemBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarItemBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarItemBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
