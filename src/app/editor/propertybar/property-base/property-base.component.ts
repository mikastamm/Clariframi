import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Property } from '../property';
import { PropertyState } from '../property-state';

@Component({
  selector: 'app-property-base',
  templateUrl: './property-base.component.html',
  styleUrls: ['./property-base.component.scss']
})
export class PropertyBaseComponent implements OnInit {

  public property: PropertyState;

  get value() {
    return this.property.value;
  }
  set value(newVal) {
    this.property.value = newVal;
  }

  constructor() {

  }


  ngOnInit() {

  }


}
