import { Component, OnInit } from '@angular/core';
import { PropertyBaseComponent } from '../../property-base/property-base.component';

@Component({
  selector: 'app-checkbox-property',
  templateUrl: './checkbox-property.component.html',
  styleUrls: ['./checkbox-property.component.scss']
})
export class CheckboxPropertyComponent extends PropertyBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
