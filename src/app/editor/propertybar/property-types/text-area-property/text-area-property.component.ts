import { Component, OnInit } from '@angular/core';
import { PropertyBaseComponent } from '../../property-base/property-base.component';

@Component({
  selector: 'app-text-area-property',
  templateUrl: './text-area-property.component.html',
  styleUrls: ['./text-area-property.component.scss']
})
export class TextAreaPropertyComponent extends PropertyBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
