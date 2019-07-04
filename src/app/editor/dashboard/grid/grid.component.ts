import { Component, OnInit } from '@angular/core';
import { PlacementService } from '../../placement/placement.service';
import { GridService } from '../grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  xLines = [];
  yLines = [];

  constructor(private placement: PlacementService, private gridService: GridService) {

  }

  ngOnInit() {
    this.gridService.onUpdateLines.subscribe(x=>this.updateLines());
  }

  updateLines() {
    let clientRect = this.placement.dashboardElement.nativeElement.getBoundingClientRect()

    this.xLines = new Array(Math.ceil(clientRect.width / this.gridService.spacing))
    this.yLines = new Array(Math.ceil(clientRect.height / this.gridService.spacing))
  }

}
