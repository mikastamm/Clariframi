import { Injectable, ElementRef } from '@angular/core';
import { PropertyState } from '../propertybar/property-state';
import { Guid } from '../util/Guid';
import { Property } from '../propertybar/property';
import { ToolbarItem } from '../toolbar/items/toolbar-item';
import { Subject } from 'rxjs';
import { PassThrough } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class MockupElementStateService {

  public elementStates = new Map<string, MockupElementState>();
  public onDelete = new Subject<void>();

  public add(state: MockupElementState) {
    console.log(state);
    this.elementStates.set(state.elementId, state);
  }

  public clearAllElements() {
    this.elementStates.clear();
    this.onDelete.next();
  }

  public createPropertyInstance(prop: Property): PropertyState {
    let state = new PropertyState();
    state.property = prop;
    state.value = prop.defaultValue;
    return state;
  }

  public createPropertyInstances(prototypes: Property[]): PropertyState[] {
    let states = [];
    prototypes.forEach(prop => {

      states.push(this.createPropertyInstance(prop));
    });
    return states;
  }

  constructor() { }
}

export class MockupElementState {
  elementId: string = Guid.newGuid();
  element: ElementRef;
  position: { x: number, y: number } = { x: 0, y: 0 };
  canvasIndex: number = 0;
  isFake = false;
  isHidden = false;
  propertyStates: PropertyState[] = [];
  toolbarItemName: string;
  parentContainerId: string;

  public static property(id: string, state:MockupElementState): PropertyState {
    let ret = null;
    state.propertyStates.forEach(prop => {
      if (prop.property.id == id)
        ret = prop;
    });

    return ret;
  }
  public static propertyValue(id: string, state: MockupElementState) {
    let ret = null;
    state.propertyStates.forEach(prop => {
      if (prop.property.id == id)
        ret = prop.value;
    });

    return ret;
  }
}
