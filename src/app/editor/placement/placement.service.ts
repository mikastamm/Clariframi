import { Injectable, Type, ElementRef } from '@angular/core';
import { MockupBaseComponent } from '../mockup-elements/mockup-base/mockup-base.component';
import { Subject } from 'rxjs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ToolbarItem } from '../toolbar/items/toolbar-item';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  public dashboardElement: ElementRef;
  public dashboardComponent: DashboardComponent;
  public takenItem: ToolbarItem;

  public onGridEnabledChange = new Subject<boolean>();
  private _gridEnabled: boolean = true;
  public get gridEnabled(): boolean {
    return this._gridEnabled;
  }
  public set gridEnabled(v: boolean) {
    this._gridEnabled = v;
    this.onGridEnabledChange.next(v);
  }


  constructor() { }
}
