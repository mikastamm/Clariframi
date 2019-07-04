import { Component, OnInit } from '@angular/core';
import { PropertyBaseComponent } from '../../property-base/property-base.component';
import { SelectionService } from '../../../selection.service';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-bin-property',
  templateUrl: './bin-property.component.html',
  styleUrls: ['./bin-property.component.scss']
})

export class BinPropertyComponent extends PropertyBaseComponent implements OnInit {

  constructor(private selectionService: SelectionService) {
      super();
  }

  @HostListener('document:keydown.delete', ['$event'])
  handleKeyboardEvent() {
    this.deleteItem();
  }

  private deleteItem() {
      this.value = true;
      this.selectionService.selected = [];
  }

  ngOnInit() {
      this.value = false;
  }

}
