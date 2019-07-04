import { Injectable, ElementRef } from '@angular/core';
import { ToolbarItem } from './toolbar/items/toolbar-item';
import { Subject } from 'rxjs';
import { MockupBaseComponent } from './mockup-elements/mockup-base/mockup-base.component';
import { MockupElementState } from './mockup-elements/mockup-element-state.service';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private sel: MockupElementState[];
  public onSelectionChange = new Subject<MockupElementState[]>();

  public get selected(): MockupElementState[] {
    return this.sel;
  }

  public set selected(selected: MockupElementState[]) {
    this.sel = selected;
    this.onSelectionChange.next(selected);
  }

  public isSelected(id) {
    return this.sel.some(x => x.elementId == id);
  }

public isDragging = false;

  constructor() {}
}

