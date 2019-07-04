import { Component, OnInit, ViewChild, ElementRef, HostListener, Renderer, Renderer2 } from '@angular/core';
import { MockupBaseComponent } from '../mockup-base/mockup-base.component';
import { GridService } from '../../dashboard/grid.service';
import { MockupElementStateService } from '../mockup-element-state.service';
import { PaginationService } from '../../dashboard/pagination.service';
import { SelectionService } from '../../selection.service';
import { PlacementService } from '../../placement/placement.service';

@Component({
  selector: 'app-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.scss']
})
export class ButtonElementComponent extends MockupBaseComponent implements OnInit {

  count: number = 0;

  @ViewChild("root")
  public element: ElementRef;

  // Whatever is in this variable will be displayed as the text of the paragraph

  constructor(grid: GridService, elementService: MockupElementStateService, public renderer: Renderer, public renderer2: Renderer2, private pagination: PaginationService, public sel: SelectionService, public placement: PlacementService) {
    super(grid, elementService, renderer, renderer2, sel, placement);

  }
  ngOnInit() {
    super.ngOnInit();

  }

  switchPage(reference) {
    this.count++;
    setTimeout(() => {
      if (this.count == 1) {
        this.count = 0;
      }
      if (this.count > 1) {
        console.log("Double Click");
        this.count = 0;
        this.pagination.selectDashboard(parseInt(reference));
      }
    }, 250);
  }
}
