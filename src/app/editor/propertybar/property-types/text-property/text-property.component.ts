import { Component, OnInit } from '@angular/core';
import { PropertyBaseComponent } from '../../property-base/property-base.component';

@Component({
  selector: 'app-text-property',
  templateUrl: './text-property.component.html',
  styleUrls: ['./text-property.component.scss']
})
export class TextPropertyComponent extends PropertyBaseComponent implements OnInit {

  private placeholder: string;

  constructor() {
    super();
  }

  ngOnInit() {
    this.placeholder = this.property.property.defaultValue;
  }

}
