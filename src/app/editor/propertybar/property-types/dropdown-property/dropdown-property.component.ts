import { Component, OnInit } from '@angular/core';
import { PropertyBaseComponent } from '../../property-base/property-base.component';

@Component({
  selector: 'app-dropdown-property',
  templateUrl: './dropdown-property.component.html',
  styleUrls: ['./dropdown-property.component.scss']
})
export class DropdownPropertyComponent extends PropertyBaseComponent implements OnInit {

  public items: any[];

  constructor() {
    super();
  }

  ngOnInit() {
    this.items = this.property.property.defaultValue;
  }

}
