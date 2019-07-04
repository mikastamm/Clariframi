import { Component, OnInit } from '@angular/core';
import { AspectRatioService } from '../dashboard/aspect-ratio.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  startMenu: boolean = true;
  newProjectMenu: boolean = false;
  loadProjectMenu: boolean = false;
  visible: boolean = true;
  credits: boolean = false;

  aspectRatios = ["1:1", "2:3", "3:4", "3:5", "5:8", "9:16"];
  data;

  constructor(
    private aspectRatioService: AspectRatioService,
  ) { }

  ngOnInit() {
    this.data = "preset";
  }

  newProject() {
    this.visible = true;
    this.startMenu = false;
    this.newProjectMenu = true;
    this.loadProjectMenu = false;
    this.credits = false;
  }

  backProject() {
    this.startMenu = true;
    this.newProjectMenu = false;
    this.loadProjectMenu = false;
    this.credits = false;
  }

  loadProject(){
    this.visible = true;
    this.startMenu = false;
    this.newProjectMenu = false;
    this.loadProjectMenu = true;
    this.credits = false;
  }

  createProject() {
    let ar = this.data.split(':', 2);
    this.aspectRatioService.height = ar[1];
    this.aspectRatioService.width = ar[0];   
    this.visible = false;
  }

  closeModal() {
    this.visible = false;
  }

  openCredits() {
    this.startMenu = false;
    this.newProjectMenu = false;
    this.loadProjectMenu = false;
    this.credits = true;
  }
}
