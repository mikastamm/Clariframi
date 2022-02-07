import { Injectable, QueryList, ElementRef } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { PlacementService } from '../placement/placement.service';
import { SelectionService } from '../selection.service';

@Injectable({
  providedIn: 'root'
})

export class PaginationService {
  public dashboards: QueryList<DashboardComponent>;
  public elements: ElementRef[]

  dashboardCount = new Array(1);

  activeDashboard = 0;

  constructor(private placementService: PlacementService, private selection: SelectionService) { }

  public createDashboard() {
    this.dashboardCount.push(this.dashboardCount.length);
    this.dashboards.changes.subscribe(val => { this.dashboards = val; });
  }

  public setDashboardCount(count: number) {
    this.dashboardCount = new Array(count);
    this.activeDashboard = 0;
  }

  public selectDashboard(index: number) {
    this.selection.selected = new Array(0);
    this.activeDashboard = index;
    let items = this.dashboards.toArray();
    this.placementService.dashboardComponent = items[index];
    this.placementService.dashboardElement = items[index].elementContainer;
  }
}
