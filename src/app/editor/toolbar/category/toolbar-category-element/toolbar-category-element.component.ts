import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToolbarCategory } from '../toolbar-category';

@Component({
  selector: 'app-toolbar-category-element',
  templateUrl: './toolbar-category-element.component.html',
  styleUrls: ['./toolbar-category-element.component.scss']
})
export class ToolbarCategoryElementComponent implements OnInit {
  @Input()
  category: ToolbarCategory;
  @Input()
  isSelected = false;

  @Output()
  click = new EventEmitter<any>();

  public onClick() {
    this.click.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
