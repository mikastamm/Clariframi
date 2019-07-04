import { Component, OnInit, Input, ViewChild, ViewContainerRef, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { ToolbarItem } from '../toolbar-item';
import { PlacementService } from 'src/app/editor/placement/placement.service';
import { ToolbarItemWrapperComponent } from '../toolbar-item-wrapper/toolbar-item-wrapper.component';
import { wrappedError } from '@angular/core/src/error_handler';

@Component({
  selector: 'app-toolbar-item-element',
  templateUrl: './toolbar-item-element.component.html',
  styleUrls: ['./toolbar-item-element.component.scss']
})
export class ToolbarItemElementComponent implements OnInit {
  @Input()
  item: ToolbarItem;

  wrapper: ToolbarItemWrapperComponent;

  @ViewChild("elementSpawner", { read: ViewContainerRef }) elementSpawner: ViewContainerRef;
  @ViewChild("elementContainer") elementContainer: ElementRef;

  constructor(private placementService: PlacementService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.createFakeToolbarItem();
  }

  createFakeToolbarItem() {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ToolbarItemWrapperComponent);
    const component = this.elementSpawner.createComponent(componentFactory);
    component.instance.item = this.item;

    component.instance.toolbaritemclick.subscribe(val => {
      console.log("Toolbar item clicked")
      this.takeElement();
    });

    component.instance.dragstart.subscribe(val => {
      console.log("Detached old fake toolbar item, creating new one");
      this.createFakeToolbarItem();
    });

    return component.instance;
  }

  takeElement() {
    this.placementService.takenItem = this.item;
  }

}
