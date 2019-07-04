import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  Renderer,
  Renderer2
} from '@angular/core';
import { MockupBaseComponent } from '../mockup-base/mockup-base.component';
import { GridService } from '../../dashboard/grid.service';
import { MockupElementStateService, MockupElementState } from '../mockup-element-state.service';
import { ContainerService } from '../../placement/container.service';
import { ToolbarItem } from '../../toolbar/items/toolbar-item';
import { Guid } from '../../util/Guid';
import { PropService } from '../../propertybar/prop.service';
import { Property } from '../../propertybar/property';
import { DropdownListOptions } from '../../propertybar/property-types/dropdown-property/dropdown-list-options';
import { SelectionService } from '../../selection.service';
import { PlacementService } from '../../placement/placement.service';
import { AspectRatioService } from '../../dashboard/aspect-ratio.service';

@Component({
  selector: 'app-container-element',
  templateUrl: './container-element.component.html',
  styleUrls: ['./container-element.component.scss']
})
export class ContainerElementComponent extends MockupBaseComponent implements OnInit {

  @ViewChild("root")
  public element: ElementRef;

  @ViewChild("elementSpawner", { read: ViewContainerRef }) elementSpawner: ViewContainerRef;
  public elementContainer;

  constructor(grid: GridService,
    elementService: MockupElementStateService,
    private containerService: ContainerService,
    private mockupElementStateService: MockupElementStateService,
    private componentFactoryResolver: ComponentFactoryResolver,
    public renderer: Renderer,
    public aspect: AspectRatioService,
    public renderer2: Renderer2,
    private propService: PropService, private sel: SelectionService, private placement: PlacementService) {
    super(grid, elementService, renderer, renderer2, sel, placement);

  }

  get height() {
    return this.value('height') * this.aspect.actualHeightPx + 'px';
  }

  get width() {
    return this.value('width') * this.aspect.actualWidthPx + 'px';
  }

  public nativeFlowProperties: Property[] = [
    this.propService.getDropdownProperty("Native Flow", DropdownListOptions.PositionOptions, "Positon", "position"),
    this.propService.getDropdownProperty("Native Flow", DropdownListOptions.DisplayOptions, "Display", "display"),
    this.propService.getDropdownProperty("Native Flow", DropdownListOptions.FloatOptions, "Float", "float"),
    this.propService.getSliderProperty(0, 50, 5, 'Margin Top', 'margin-top', 1, 'Native Flow'),
    this.propService.getSliderProperty(0, 50, 5, 'Margin Right', 'margin-right', 1, 'Native Flow'),
    this.propService.getSliderProperty(0, 50, 5, 'Margin Bottom', 'margin-bottom', 1, 'Native Flow'),
    this.propService.getSliderProperty(0, 50, 5, 'Margin Left', 'margin-left', 1, 'Native Flow'),
  ]

  ngOnInit() {
    super.ngOnInit();
    this.elementContainer = this.element;

    if (!this.state.isFake)
      this.containerService.containers.push({
        container: this,
        containerElement: this.element
      });

  }

  addItem(item: ToolbarItem, state = null): MockupBaseComponent {
    if (!this.state.isFake) {
      console.log("Item added to container", item);
      state = this.setupState(item, state);
      this.mockupElementStateService.add(state);

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.element);
      const component = this.elementSpawner.createComponent(componentFactory);

      state.element = component.instance.element;

      component.instance.id = state.elementId;
      this.renderer.setElementStyle(component.location.nativeElement, "position", "static");
      return component.instance;
    }
  }

  setupState(item, state) {
    if (state == null)
      state = this.createState(item);
    else
      state = this.adjustState(state);

    if (state.propertyStates == null || state.propertyStates.length == 0) {
      state.propertyStates = this.mockupElementStateService.createPropertyInstances(item.properties);
      state.propertyStates = this.addNativeFlowProperties(state);
    }
    else {
      this.restorePropertiesOnLoadedState(state, item);
    }
    return state;
  }

  addNativeFlowProperties(state: MockupElementState): MockupElementState {
    state.propertyStates.push(...this.mockupElementStateService.createPropertyInstances(this.nativeFlowProperties));
    return state;
  }

  adjustState(state: MockupElementState) {
    state.canvasIndex = this.state.canvasIndex;
    state.parentContainerId = this.state.elementId;
    state.isFake = false;
    state.position = { x: 0, y: 0 };
    return state;
  }

  createState(item: ToolbarItem) {
    let s = new MockupElementState()
    s.canvasIndex = this.state.canvasIndex;
    s.elementId = Guid.newGuid();
    s.position = { x: 0, y: 0 };
    s.propertyStates = this.mockupElementStateService.createPropertyInstances(item.properties);

    s.toolbarItemName = item.name;
    s.parentContainerId = this.state.elementId;

    s = this.addNativeFlowProperties(s);
    return s;
  }

  restorePropertiesOnLoadedState(state, item) {
    let props = this.mockupElementStateService.createPropertyInstances(item.properties);
    props.push(...this.mockupElementStateService.createPropertyInstances(this.nativeFlowProperties));
    state.propertyStates.forEach(prop => {
      prop.value = prop._value;

      props.forEach(defaultProp => {
        if (prop.property.id == defaultProp.property.id)
          prop.property = defaultProp.property;
      });
    });
  }
}
