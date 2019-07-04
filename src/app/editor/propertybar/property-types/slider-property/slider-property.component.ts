import { Component, OnInit } from '@angular/core';
import { PropertyBaseComponent } from '../../property-base/property-base.component';

@Component({
  selector: 'app-slider-property',
  templateUrl: './slider-property.component.html',
  styleUrls: ['./slider-property.component.scss']
})
export class SliderPropertyComponent extends PropertyBaseComponent implements OnInit {

  constructor() {
    super();
  }

  private def;

  ngOnInit() {
    this.def = this.property.property.defaultValue;
    this.value = this.def.value;
  }

}
