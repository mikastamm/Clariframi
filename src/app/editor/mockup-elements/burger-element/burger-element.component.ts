import { Component, OnInit, ViewChild, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { MockupBaseComponent } from '../mockup-base/mockup-base.component';
import { GridService } from '../../dashboard/grid.service';
import { MockupElementStateService } from '../mockup-element-state.service';
import { SelectionService } from '../../selection.service';
import { PlacementService } from '../../placement/placement.service';


@Component({
  selector: 'app-burger-element',
  templateUrl: './burger-element.component.html',
  styleUrls: ['./burger-element.component.scss']
})
export class BurgerElementComponent extends MockupBaseComponent implements OnInit {

  @ViewChild("root")
  public element: ElementRef;

  constructor(grid: GridService, elementService: MockupElementStateService, public renderer: Renderer, public renderer2: Renderer2, public sel: SelectionService, public placement: PlacementService) {
    super(grid, elementService, renderer, renderer2, sel, placement);
  }

  ngOnInit() {
    super.ngOnInit();

  }
}
