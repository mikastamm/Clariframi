import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.scss']
})
export class PaginationBarComponent implements OnInit {

  constructor(
    private pagination: PaginationService,
  ) {  
  }

  public generateDashboard() {
    this.pagination.createDashboard();
  }

  public changeDashboard(index: number) {
    this.pagination.selectDashboard(index);
  }

  ngOnInit() {
  }

}
