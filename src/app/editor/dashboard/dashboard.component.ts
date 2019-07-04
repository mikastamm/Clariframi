import { Component, OnInit, Input, ViewChild, ElementRef, ComponentFactoryResolver, Type, ViewContainerRef, ViewChildren, HostListener, Renderer, ComponentRef } from '@angular/core';
import { PlacementService } from '../placement/placement.service';
import { MockupBaseComponent } from '../mockup-elements/mockup-base/mockup-base.component';
import { ToolbarItem } from '../toolbar/items/toolbar-item';
import { MockupElementState, MockupElementStateService } from '../mockup-elements/mockup-element-state.service';
import { of } from 'rxjs';
import { ToolbarDataService } from '../toolbar/services/toolbar-data.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { SelectionAreaComponent } from './selection-area/selection-area.component';
import { GridService } from './grid.service';
import { AspectRatioService } from './aspect-ratio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  @Input() dashboardIndex: number;

  @ViewChild("elementSpawner", { read: ViewContainerRef }) elementSpawner: ViewContainerRef;
  @ViewChild("elementContainer") public elementContainer: ElementRef;


  width: number;
  height: number;

  constructor(
    private placementService: PlacementService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private mockupElementStateService: MockupElementStateService,
    private dataService: ToolbarDataService,
    private renderer: Renderer,
    private gridService: GridService,
    private aspectRatioService: AspectRatioService,
    //private navbarComponent: NavbarComponent
  ) {
  }

  ngOnInit() {
    if (this.dashboardIndex == 0) {
      this.placementService.dashboardElement = this.elementContainer;
      this.placementService.dashboardComponent = this;
    }

    this.onAspectRatioChange();
    this.aspectRatioService.onHeightChange.subscribe(x => this.onAspectRatioChange());
    this.aspectRatioService.onWidthChange.subscribe(x => this.onAspectRatioChange());

    setTimeout(() => {
      this.gridService.onUpdateLines.next();
    }, 1);
  }

  onAspectRatioChange() {
    this.height = 650
    this.width = this.height / this.aspectRatioService.height * this.aspectRatioService.width;
    this.aspectRatioService.actualHeightPx = this.elementContainer.nativeElement.offsetHeight;
    this.aspectRatioService.actualWidthPx = this.elementContainer.nativeElement.offsetWidth;
  }

  click(event) {
    this.onClickPlaceComponent(event);
    console.log("click");
  }



  onClickPlaceComponent(event) {
    //If the user has selected a component to place
    if (this.placementService.takenItem) {
      let state = new MockupElementState();
      state.position = { x: event.offsetX, y: event.offsetY };
      state.toolbarItemName = this.placementService.takenItem.name;

      let mockupComponent = this.createMockupComponent(state);
      this.placementService.takenItem = null;
      //Makes the created component draggable and confines it to the dashboard
      mockupComponent.attachToDashboard(this.elementContainer, true);
      //Set the component to the mouse position
    }
  }


  onDropPlaceComponent(event, item: ToolbarItem) {
    let state = new MockupElementState();
    let dashBounds = this.elementContainer.nativeElement.getBoundingClientRect();
    state.position = { x: event.x - dashBounds.x, y: event.y - dashBounds.y };
    state.toolbarItemName = item.name;

    let mockupComponent = this.createMockupComponent(state);
    this.placementService.takenItem = null;
    //Makes the created component draggable and confines it to the dashboard
    mockupComponent.attachToDashboard(this.elementContainer, true);
    //Set the component to the mouse position
  }

  createMockupComponent(state: MockupElementState) {
    // Create component dynamically inside the ng-template
    let item = this.dataService.getToolbarItemByName(state.toolbarItemName);

    if (state.propertyStates == null || state.propertyStates.length == 0) {
      state.propertyStates = this.mockupElementStateService.createPropertyInstances(item.properties);
    }
    else {
      this.restorePropertiesOnLoadedState(state, item);
    }
    console.log(this.dashboardIndex);
    state.canvasIndex = this.dashboardIndex;
    this.mockupElementStateService.add(state);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.element);
    const component = this.elementSpawner.createComponent(componentFactory);
    state.element = component.instance.element;

    component.instance.id = state.elementId;

    return component.instance;
  }


  restorePropertiesOnLoadedState(state: MockupElementState, item) {
    let defaultProps = this.mockupElementStateService.createPropertyInstances(item.properties);
    state.propertyStates.forEach(prop => {
      prop.value = prop._value;
      defaultProps.forEach(defaultProp => {
        if (prop.property.id == defaultProp.property.id)
          prop.property = defaultProp.property;
      });
    });
  }
}
