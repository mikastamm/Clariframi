import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToolbarCategory } from '../toolbar-category';

@Component({
  selector: 'app-toolbar-category-selector',
  templateUrl: './toolbar-category-selector.component.html',
  styleUrls: ['./toolbar-category-selector.component.scss']
})
export class ToolbarCategorySelectorComponent implements OnInit {

@Input()
categories:ToolbarCategory[];

selectedIndex:number;

@Output()
onSelectionChange:EventEmitter<ToolbarCategory> = new EventEmitter<ToolbarCategory>();
 
constructor() { }

  ngOnInit() {
  }

  onCategoryClick(index){
    this.selectedIndex = index;

    //Trigger the onSelectionChange event, so that the parent component (toolbar component in our case)
    //gets notifed of the changed category selection
    this.onSelectionChange.emit(this.categories[index]);
  }
}
