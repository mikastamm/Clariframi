import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, HostListener, ComponentRef, ComponentFactoryResolver, Renderer, ViewChild, ViewContainerRef } from '@angular/core';
import { PaginationService } from '../pagination.service';
import { DashboardComponent } from '../dashboard.component';
import { SelectionAreaComponent } from '../selection-area/selection-area.component';
import { PlacementService } from '../../placement/placement.service';
import { MockupElementStateService } from '../../mockup-elements/mockup-element-state.service';
import { ToolbarDataService } from '../../toolbar/services/toolbar-data.service';
import { SelectionService } from '../../selection.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})

export class DashboardContainerComponent implements OnInit, AfterViewInit {

  @ViewChildren(DashboardComponent)
  dashboards: QueryList<DashboardComponent>;

  list: QueryList<DashboardComponent> = this.dashboards;

  @ViewChild("spawner", { read: ViewContainerRef }) elementSpawner: ViewContainerRef;

  constructor(private pagination: PaginationService,  private placementService: PlacementService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private mockupElementStateService: MockupElementStateService,
    private dataService: ToolbarDataService,
    private renderer: Renderer,
    private selection:SelectionService) { }

  ngAfterViewInit(): void {
    this.pagination.dashboards = this.dashboards;
  }

  selectionRef: ComponentRef<SelectionAreaComponent>;
  selectionPos: { x: number, y: any }
  mousedown(event) {
    this.onStartSelection(event.clientX, event.clientY);
  }

touchmove(event){
    this.updateSelectionArea(event.touches[0].clientX, event.touches[0].clientY);
    return true;
}

  logged = false;
  i = 0;
  mousemove(event) {
    this.updateSelectionArea(event.clientX, event.clientY)
   
  }

  selectionStarted = false;
onStartSelection(x, y){
  if(!this.selectionStarted){
    this.selectionStarted = true;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SelectionAreaComponent);
    const component = this.elementSpawner.createComponent(componentFactory);

    component.instance.x = x;
    component.instance.y = y;

    this.selectionRef = component;
    this.selectionPos = {x: x, y:y}
    this.logged = false;
  }
}

  updateSelectionArea(x,y){
    if (this.selectionRef) {
      let sel = this.selectionRef.instance;
      let rectX, rectY, w, h;
      let origin = { x: this.selectionPos.x, y: this.selectionPos.y }

      h = y > this.selectionPos.y ? y - this.selectionPos.y : this.selectionPos.y - y;
      w = x > this.selectionPos.x ? x - this.selectionPos.x : this.selectionPos.x - x;
      rectX = x > this.selectionPos.x ? this.selectionPos.x : x;
      rectY = y > this.selectionPos.y ? this.selectionPos.y : y;

      sel.height = h;
      sel.width = w;
      sel.x = rectX;
      sel.y = rectY;
    }
  }

  touchdown(event){
    console.log("selectionStart");
    if(!this.selection.isDragging)
    this.onStartSelection(event.touches[0].clientX,event.touches[0].clientY);
    return false;
  }

  touchend(event){
    this.onStopSelection();
    return true;
  }

  @HostListener('window:mouseup', ['$event'])
  mouseUp(event) {
    this.onStopSelection();
  }

  onStopSelection(){
    if (this.selectionRef)
      this.selectionRef.instance.checkSelection();
    this.removeSelection();
    this.selectionStarted = false;
  }

  removeSelection() {
    if (this.selectionRef)
      this.selectionRef.location.nativeElement.classList.add("d-none");
    this.selectionRef = null
  }
  
  ngOnInit() {
  }

}
