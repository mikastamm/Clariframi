import { Component, OnInit, ElementRef, OnDestroy, AfterViewInit, Renderer, Renderer2 } from '@angular/core';
import { Draggable } from 'gsap/Draggable';
import TweenLite from 'gsap';
import { GridService } from '../../dashboard/grid.service';
import { ToolbarItem } from '../../toolbar/items/toolbar-item';
import { Property } from '../../propertybar/property';
import { Subscription, Observable } from 'rxjs';
import { MockupElementState, MockupElementStateService } from '../mockup-element-state.service';
import { ContainerService } from '../../placement/container.service';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as Hammer from 'hammerjs';
import TweenMax from 'gsap';
import { Xliff } from '@angular/compiler';
import { SelectionService } from '../../selection.service';
import { PlacementService } from '../../placement/placement.service';
import { DropdownListOptions } from "../../propertybar/property-types/dropdown-property/dropdown-list-options";
import { DropdownPropertyComponent } from "../../propertybar/property-types/dropdown-property/dropdown-property.component";
import { PropService } from '../../propertybar/prop.service';
import { TestComponent } from "../test/test.component";
import { CheckboxOptions } from "../../propertybar/property-types/checkbox-property/checkbox-options";
import { Power1 } from 'gsap/all';

@Component({
  selector: 'app-mockup-base',
  templateUrl: './mockup-base.component.html',
  styleUrls: ['./mockup-base.component.scss'],
})
export class MockupBaseComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private grid: GridService,
    private elementService: MockupElementStateService,
    public renderer: Renderer,
    public renderer2: Renderer2,
    //private propService: PropService,
    private selectionService: SelectionService,
    private placementService: PlacementService) {
    this.spacing = grid.getSpacing();
  }

  public spacing: number;

  public id;
  public get state(): MockupElementState {
    return this.elementService.elementStates.get(this.id);
  }

  public element: ElementRef;
  protected propertySubscriptions: Subscription[] = [];
  private elementDraggable;

  private dropdownProperty: Property
    = {
      defaultValue: null,
      title: '',
      id: '',
      category: '',
      formControlComponent: DropdownPropertyComponent,
    };


  ngAfterViewInit(): void {
    this.element.nativeElement.addEventListener('pinch', console.log(), false);

    const hammer = new Hammer(this.element.nativeElement);

    //hammer.on('pan', (event) => {
    //this.pan(event);
    //});

    hammer.on('pinchstart', (event) => {
      console.log('Got ' + event.type);
      this.pinchstart(event);
    });

    hammer.on('pinch', (event) => {
      console.log('Got ' + event.type);

      this.pinch(event);
    });

    hammer.on('pinchend', (event) => {
      console.log('Got ' + event.type);
      console.log(event);
      this.pinchend(event);
    });

    hammer.get('pinch').set({ enable: true });

  }

  private pan(event) {
    /*
    //let elementRect = this.element.nativeElement.getBoundingClientRect();
    console.log('Got ' + event.type);
    // console.log("style Width: "+this.element.nativeElement.style.width);
    // console.log("style Height: "+this.element.nativeElement.style.width);
    // console.log("Bounding Width: " + elementRect.width);
    // console.log("Bounding Height: " + elementRect.height);
    console.log("font size: " + this.element.nativeElement.style.fontSize);
    console.log("unit: " + this.element.nativeElement.style.unit);
    //this.element.nativeElement.style.value()
    console.log(this.state.propertyStates);

    let defaultWidth = '200';
    let defaultHeight = '200';
    let defaultUnit = 'px';
    let valueRegex = /[+-]?\d+(?:\.\d+)?/;
    let unitRegex = /[A-Za-z]?/;
    let widthSet = false;
    let fontsizeSet = false;

    this.state.propertyStates.forEach(prop => {



      if(prop.property.id=='unit'){
        console.log("unitHERE");
        console.log(prop.value);

        //check if dropdown has selected unit
        if(prop.value != null){
          //console.log(prop.value.match(unitRegex));
          //prop.value = prop.value.match(unitRegex);
          //defaultUnit = prop.value.match(unitRegex);

          console.log(this.state.property('unit').value);
          let dropdown = Object.assign({}, this.element.nativeElement.dropdownProperty);
          //this.dropdownProperty = this.state.property('unit').value;
          //this.dropdownProperty = this.propService.getDropdownProperty('css', DropdownListOptions.UnitOptions, 'CSS Unit', 'unit');
          console.log("test array: "+this.dropdownProperty);
          let dropdownArray = DropdownListOptions;
          console.log(dropdownArray);
        }
        else {
          //Todo: Set default selected unit
        }

        //console.log(prop.value);
        //prop.value = prop.value;
      } else {
        //prop.value += 'em';
      }
      if(prop.property.id=='width' || prop.property.id=='height'){
        if(prop.property.id=='width' && !fontsizeSet){
          console.log("widthHERE");
          console.log("value: "+prop.value);
          if(!isNaN(prop.value)){
            console.log("if");
            prop.value = Math.round(prop.value * 1.05)+defaultUnit;
          }
          else {
            console.log("else");
            console.log(prop.value.match(valueRegex));
            console.log(prop.value.match(unitRegex));
            let setUnit = prop.value.match(unitRegex)
            let setValue = prop.value.match(valueRegex);
            if(setUnit==null){
              setUnit = defaultUnit;
            }
            if(setValue == null){
              setValue = defaultWidth;
            }
            prop.value = Math.round(setValue*1.05)+setUnit;
          }
          widthSet = true;
        }
        if(prop.property.id=='height'){
          console.log("heightHERE");
          console.log("value: "+prop.value);
          prop.value = 'auto';
          // prop.value = prop.value * 1.05+'px';
        }
      } else if(prop.property.id=='fontSize' && !widthSet){
        console.log("fontSizeHERE");
        console.log("value: "+prop.value);
        prop.value = Math.round(prop.value * 1.05);
        fontsizeSet = true;
      }
    });
*/
  }

  private pinchstart(event) {
    //TweenMax.to(this.element.nativeElement, 0, { scale: event.scale });
  }

  private pinch(event) {
    TweenMax.to(this.element.nativeElement, 0, { scale: event.scale });
  }

  private pinchend(event) {
    //TweenMax.to(this.element.nativeElement, 0, { scale: event.scale });
    console.log(`${event.scale}`);
    console.log(this.element.nativeElement);

    //TweenMax.to(this.element.nativeElement, 0, { scale: event.scale });

    let elementRect = this.element.nativeElement.getBoundingClientRect();
    console.log("OLD W x H: " + this.element.nativeElement.style.width + " x " + this.element.nativeElement.style.height);
    console.log("NEW W x H: " + elementRect.width + " x " + elementRect.height);

    let defaultWidth = '200px';
    let autoHeight = 'auto';
    let defaultUnit = 'px';
    let valueRegex = /[+-]?\d+(?:\.\d+)?/;
    let unitRegex = /^[a-zA-Z]+$/;
    let widthHeightSet = false;
    let fontsizeSet = false;

    this.state.propertyStates.forEach(prop => {
      //unit property wert setzen
      //Todo: default Property erstellen, die unit übergibt

      if (prop.property.id == 'unit') {
        //Check if a unit is selected
        if (prop.value != null) {
          //console.log(this.state.property('unit').value);
          console.log("Unit dropdown" + prop.value);
          //console.log(prop.value);
          //prop.value = prop.value;
        }
        else {
          //Todo: Set default selected unit
          //this.dropdownProperty = this.propService.getDropdownProperty('css', DropdownListOptions.UnitOptions, 'CSS Unit', 'unit');
        }
      }
      //width und height properties setzen
      if (prop.property.id == 'width' && !fontsizeSet) {
        console.log("RegEx Width: " + prop.value.match(valueRegex) + prop.value.match(unitRegex));
        let setUnit = prop.value.match(unitRegex)
        //let setValue = prop.value.match(valueRegex);
        let setValue = elementRect.width;
        if (setUnit == null) {
          setUnit = defaultUnit;
        }
        if (setValue == null) {
          setValue = defaultWidth;
        }
        console.log("set width: " + Math.round(setValue) + setUnit);
        prop.value = Math.round(setValue) + setUnit;
        widthHeightSet = true;
      }

      if (prop.property.id == 'height' && !fontsizeSet) {
        console.log("RegEx Height: " + prop.value.match(unitRegex) + prop.value.match(unitRegex));
        console.log("HEight Value:" + prop.value);
        let setUnit = prop.value.match(unitRegex)
        //let setValue = prop.value.match(valueRegex);
        let setValue = elementRect.height;
        if (setUnit != 'auto') {
          if (setUnit == null) {
            setUnit = defaultUnit;
          }
          if (setValue == null) {
            setValue = autoHeight;
          }
          console.log("set height: " + Math.round(setValue) + setUnit);
          prop.value = Math.round(setValue) + setUnit;
        }
        else {
          console.log("set height: auto");

        }
        widthHeightSet = true;
      }

      if (prop.property.id == 'fontSize' && !widthHeightSet) {
        //console.log("value: "+prop.value);
        //prop.value = Math.round(prop.value * event.scale);
        fontsizeSet = true;
      }
    });

  }

  private attachNativeFlowProperties() {
    if (this.state.parentContainerId != null) {
      MockupElementState.property('float', this.state).onValueChange.subscribe(val => {
        this.renderer.setElementStyle(this.element.nativeElement, 'float', val);
      });
      MockupElementState.property('display', this.state).onValueChange.subscribe(val => {
        this.renderer.setElementStyle(this.element.nativeElement, 'display', val);
      });
      MockupElementState.property('position', this.state).onValueChange.subscribe(val => {
        this.renderer.setElementStyle(this.element.nativeElement, 'position', val);
      });
      MockupElementState.property('margin-top', this.state).onValueChange.subscribe(val => {
        this.renderer.setElementStyle(this.element.nativeElement, 'margin-top', val + 'px');
      });
      MockupElementState.property('margin-bottom', this.state).onValueChange.subscribe(val => {
        this.renderer.setElementStyle(this.element.nativeElement, 'margin-bottom', val + 'px');
      });
      MockupElementState.property('margin-left', this.state).onValueChange.subscribe(val => {
        this.renderer.setElementStyle(this.element.nativeElement, 'margin-left', val + 'px');
      });
      MockupElementState.property('margin-right', this.state).onValueChange.subscribe(val => {
        this.renderer.setElementStyle(this.element.nativeElement, 'margin-right', val + 'px');
      });
    }
  }

  public value(id: string) {
    let val;
    if (this.state) {
      val = MockupElementState.propertyValue(id, this.state);
    }
    else {
      val = null;
    }
    return val;
  }

  public attachToDashboard(dashboardElement: ElementRef, useSnapping = false) {
    const id = this.state.elementId;
    const stateService = this.elementService;
    const selectionService = this.selectionService;
    const placementService = this.placementService;
    const space = useSnapping ? this.grid.getSpacing() : 1;
    const isContainer =

      Draggable.create(this.element.nativeElement, {
        bounds: dashboardElement.nativeElement,
        liveSnap: {
          x(value) {
            let val = placementService.gridEnabled ? Math.round(value / space) * space : value;

            return val;

          },
          y(value) {
            return placementService.gridEnabled ? Math.round(value / space) * space : value;
          }
        },
        onDrag() {
          const elem = stateService.elementStates.get(id);
          let deltaX = elem.position.x - this.x;
          let deltaY = elem.position.y - this.y;
          elem.position.x = this.x;
          elem.position.y = this.y;

          if (selectionService.isSelected(id)) {
            selectionService.selected.forEach(x => {
              if (x.elementId != id) {
                MockupBaseComponent.setPosition(
                  x.position.x - deltaX,
                  x.position.y - deltaY,
                  x.element,
                  x);
              }
            })
          }
        }
      });
    this.elementDraggable = Draggable.get(this.element.nativeElement);
    MockupBaseComponent.setPosition(this.state.position.x, this.state.position.y, this.element, this.state);
    this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
  }

  public static setPosition(x, y, element, state) {

    let draggable = Draggable.get(element.nativeElement);

    TweenLite.set(element.nativeElement, { x, y });
    state.position.x = x;
    state.position.y = y;
    draggable.applyBounds();
  }

  public GetPropertyById(id): Property {
    let result = null;

    this.state.propertyStates.forEach(element => {
      if (element.property.id == id) {
        result = element;
      }
    });
    return result;
  }


  ngOnInit() {
    this.attachNativeFlowProperties();

    MockupElementState.property('bin', this.state).onValueChange.subscribe(val => {
      this.state.isHidden = val;
      if (val == true) {
        //Delete Animation
        TweenMax.to(this.element.nativeElement, 0.3, { scale: 0, autoAlpha: 0, ease: Power1.easeIn });
        //this.renderer2.addClass(this.element.nativeElement, 'd-none');
      } else if (val == false) {
        TweenMax.to(this.element.nativeElement, 0.3, { scale: 1, autoAlpha: 1, ease: Power1.easeIn });
        //this.renderer2.removeClass(this.element.nativeElement, 'd-none');
      } else {
        console.log('Error: isHidden is neither true nor false');
      }
    });
  }

  ngOnDestroy(): void {
    this.propertySubscriptions.forEach(sub => {
      // Clean up property subscription to prevent memory leaks
      if (sub && !sub.closed)
        sub.unsubscribe();
    });
  }

}
