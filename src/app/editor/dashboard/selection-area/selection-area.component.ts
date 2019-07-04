import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Draggable } from 'gsap/Draggable';
import { MockupElementStateService, MockupElementState } from '../../mockup-elements/mockup-element-state.service';
import { PaginationService } from '../pagination.service';
import { SelectionService } from '../../selection.service';

@Component({
  selector: 'app-selection-area',
  templateUrl: './selection-area.component.html',
  styleUrls: ['./selection-area.component.scss']
})
export class SelectionAreaComponent implements OnInit {
  @ViewChild("area")
  area: ElementRef;

  public width: number;
  public height: number;
  public x: number;
  public y;

  constructor(private state: MockupElementStateService, private pagination: PaginationService, private selection: SelectionService) { }

  checkSelection() {
    console.log("checkSelect");
    Draggable.create(this.area.nativeElement);
    let drag = Draggable.get(this.area.nativeElement);

    let possibleHits = Array.from(this.state.elementStates.values()).filter(val =>
      val.canvasIndex == this.pagination.activeDashboard &&
      !val.isFake &&
      !val.isHidden &&
      val.parentContainerId == null
    )

    let selected: MockupElementState[] = [];
    possibleHits.forEach(element => {
      if (drag.hitTest(element.element.nativeElement)) {
        selected.push(element);
      }
    });
    this.selection.selected = selected;

  }

  ngOnInit() {
  }

}
