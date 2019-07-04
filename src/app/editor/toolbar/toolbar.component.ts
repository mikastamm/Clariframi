import { Component, OnInit } from '@angular/core';
import { ToolbarDataService } from './services/toolbar-data.service';
import { ToolbarCategory } from './category/toolbar-category';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  categories:ToolbarCategory[];
  selectedCategory:ToolbarCategory;

  constructor(private dataService:ToolbarDataService) { }

  ngOnInit() {
     this.categories = this.dataService.getToolbarData();
  }

  onCategorySelectionChange(newSelectedCategory){
    this.selectedCategory = newSelectedCategory;
  }
}
