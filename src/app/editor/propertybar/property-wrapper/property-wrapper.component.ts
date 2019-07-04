import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, ElementRef, OnChanges } from '@angular/core';
import { Property } from '../property';
import { PropertyState } from '../property-state';

@Component({
  selector: 'app-property-wrapper',
  templateUrl: './property-wrapper.component.html',
  styleUrls: ['./property-wrapper.component.scss']
})
export class PropertyWrapperComponent implements OnInit {

  @Input()
  property: PropertyState;


  @ViewChild("elementSpawner", { read: ViewContainerRef }) elementSpawner: ViewContainerRef;
  @ViewChild("elementContainer") elementContainer: ElementRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  createPropertyComponent() {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.property.property.formControlComponent);
    const component = this.elementSpawner.createComponent(componentFactory);
    component.instance.property = this.property;
    return component.instance;
  }



  ngOnInit() {
    this.createPropertyComponent();
  }

}
