import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ElementRef, Type, Output, EventEmitter } from '@angular/core';
import { PlacementService } from 'src/app/editor/placement/placement.service';
import { MockupBaseComponent } from 'src/app/editor/mockup-elements/mockup-base/mockup-base.component';
import Draggable from 'gsap/Draggable';
import { Subject } from 'rxjs';
import { ToolbarItem } from '../toolbar-item';
import { MockupElementState, MockupElementStateService } from 'src/app/editor/mockup-elements/mockup-element-state.service';
import { Guid } from 'src/app/editor/util/Guid';
import { Power2, Bounce } from 'gsap/all';
import TweenMax from 'gsap';
import { ContainerService } from 'src/app/editor/placement/container.service';
import { container } from '@angular/core/src/render3';

@Component({
  selector: 'app-toolbar-item-wrapper',
  templateUrl: './toolbar-item-wrapper.component.html',
  styleUrls: ['./toolbar-item-wrapper.component.scss']
})
export class ToolbarItemWrapperComponent implements OnInit {
  public toolbaritemclick = new Subject();
  public dragstart = new Subject();

  @ViewChild("elementSpawner", { read: ViewContainerRef }) elementSpawner: ViewContainerRef;
  @ViewChild("elementContainer") elementContainer: ElementRef;
  public item: ToolbarItem;
  public component: MockupBaseComponent;
  private created: boolean = false;
  private dragStarted: boolean = false;

  constructor(private placementService: PlacementService, private containerService: ContainerService, private componentFactoryResolver: ComponentFactoryResolver, private mockupElementStateService: MockupElementStateService) { }

  ngOnInit() {
    this.makeDraggable();
  }



  makeDraggable() {
    Draggable.create(this.elementContainer.nativeElement, {
      onDragStart: () => {
        this.createMockupComponent();
        this.elementContainer.nativeElement.classList.remove('cf-toolbar-item-box', 'cf-fake-drag');
        this.elementContainer.nativeElement.classList.add('dragged');
        this.dragStarted = true;

        this.dragstart.next();
        this.dragstart.complete();
        this.toolbaritemclick.complete();

        /* Dragging Animation */

        TweenMax.to(this.component.element.nativeElement, 0.1, { scale: 0.5, ease: Power2, autoAlpha: 0 });
        TweenMax.to(this.component.element.nativeElement, 0.5, { scale: 1.5, ease: Power2.easeOut, autoAlpha: 0.8 });
        TweenMax.to(this.component.element.nativeElement, 0.5, { scale: 1.1, delay: 0.5, autoAlpha: 1 });

      },
      onDragEnd: (pointerEvent) => {
        let containerHit = false;

        //Check if this was dropped on a sub-container
        if (this.containerService.containers)
          for (let i = 0; i < this.containerService.containers.length; i++) {
            const container = this.containerService.containers[i];
            if (Draggable.hitTest(Draggable.get(this.elementContainer.nativeElement).target, container.containerElement.nativeElement)) {
              container.container.addItem(this.item);
              containerHit = true;
              break;
            }
          }

        if (!containerHit && Draggable.hitTest(Draggable.get(this.elementContainer.nativeElement).target, this.placementService.dashboardElement.nativeElement)) {
          this.placementService.dashboardComponent.onDropPlaceComponent(pointerEvent, this.item);
        }

        this.mockupElementStateService.elementStates.delete(this.component.state.elementId);
        this.elementContainer.nativeElement.remove();

      }
    });
  }

  onClick() {
    if (!this.dragStarted) {
      this.toolbaritemclick.next();
    }
  }

  createMockupComponent() {
    if (!this.created) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item.element);
      const component = this.elementSpawner.createComponent(componentFactory);

      this.component = component.instance;
      let state = new MockupElementState();
      state.isFake = true;
      state.canvasIndex = 1;
      state.elementId = Guid.newGuid();
      state.element = component.instance.element;
      state.propertyStates = this.mockupElementStateService.createPropertyInstances(this.item.properties);
      this.mockupElementStateService.add(state);

      this.component.id = state.elementId;

      this.created = true;
    }
    // Create component dynamically inside the ng-template

  }
}
