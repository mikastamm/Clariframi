import { Component, OnInit, Input } from '@angular/core';
import { ToolbarItem } from '../toolbar-item';
import { ToolbarCategory } from '../../category/toolbar-category';

@Component({
  selector: 'app-toolbar-item-bar',
  templateUrl: './toolbar-item-bar.component.html',
  styleUrls: ['./toolbar-item-bar.component.scss']
})
export class ToolbarItemBarComponent implements OnInit {
  @Input()
  category: ToolbarCategory;



  constructor() { }

  ngOnInit() {
  }

}
