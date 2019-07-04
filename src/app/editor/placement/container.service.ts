import { Injectable, ElementRef } from '@angular/core';
import { MockupBaseComponent } from '../mockup-elements/mockup-base/mockup-base.component';
import { ContainerElementComponent } from '../mockup-elements/container-element/container-element.component';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  public containers: CFContainer[] = [];
  //Map: ContainerId=>ContainerChildren
  public containerContents: ContainerItem[] = [];

  public isContainer(elementId) {
    let result = false;

    for (let i = 0; i < this.containers.length; i++) {
      const element = this.containers[i];
      if (elementId == element.container.state.elementId) {
        result = true;
        break;
      }
    }
  }

  constructor() { }
}

export interface CFContainer {
  container: ContainerElementComponent,
  containerElement: ElementRef;
}

export interface ContainerItem {
  owningContainer: ContainerElementComponent,
  owningContainerElement: ElementRef;
  element: ElementRef,
  mockupBase: MockupBaseComponent,

}
