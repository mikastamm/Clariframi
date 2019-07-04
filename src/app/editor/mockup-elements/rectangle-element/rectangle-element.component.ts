import { Component, OnInit, ViewChild, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { MockupBaseComponent } from '../mockup-base/mockup-base.component';
import { GridService } from '../../dashboard/grid.service';
import { MockupElementStateService } from '../mockup-element-state.service';
import { SelectionService } from '../../selection.service';
import { PlacementService } from '../../placement/placement.service';

@Component({
  selector: 'app-rectangle-element',
  templateUrl: './rectangle-element.component.html',
  styleUrls: ['./rectangle-element.component.scss']
})
export class RectangleElementComponent extends MockupBaseComponent implements OnInit {

  @ViewChild("root")
  public element: ElementRef;


  constructor(grid: GridService, elementService: MockupElementStateService, public renderer: Renderer, public renderer2: Renderer2, private sel: SelectionService, public placement: PlacementService) {
    super(grid, elementService, renderer, renderer2, sel, placement);

  }

  ngOnInit() {
    super.ngOnInit();

  }

}
