import { Component, OnInit } from '@angular/core';
import { PropertyBaseComponent } from '../../property-base/property-base.component';

@Component({
  selector: 'app-color-property',
  templateUrl: './color-property.component.html',
  styleUrls: ['./color-property.component.scss']
})
export class ColorPropertyComponent extends PropertyBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
