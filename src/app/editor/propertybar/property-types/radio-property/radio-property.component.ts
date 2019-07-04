import { Component, OnInit } from '@angular/core';
import { PropertyBaseComponent } from '../../property-base/property-base.component';

@Component({
  selector: 'app-radio-property',
  templateUrl: './radio-property.component.html',
  styleUrls: ['./radio-property.component.scss']
})
export class RadioPropertyComponent extends PropertyBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
