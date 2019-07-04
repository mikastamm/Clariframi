import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SavingService } from '../saving.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import * as FileSaver from 'file-saver';
import { PaginationService } from '../dashboard/pagination.service';
import html2canvas from 'html2canvas';
import { GridService } from '../dashboard/grid.service';
import { PlacementService } from '../placement/placement.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor(
    private pagination: PaginationService, 
    private saving: SavingService, 
    private placement: PlacementService, 
    private gridService: GridService,
    private modal: ModalService
    ) { }

  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;

  private data: string;

  public saveName = 'unnamed File';
  public saveType = 'this';
  public showExportDialog = false;

  public showImportDialog = false;
  public showImportFile = false;
  public showSaveDialog = false;

  loadSaveName = '';

  ngOnInit() {
  }

  startExport() {
    this.showExportDialog = !this.showExportDialog;
    this.showImportDialog = false;
    this.showImportFile = false;
    this.showSaveDialog = false;
  }

  export() {
    this.saving.save(this.saveName);
    this.showExportDialog = false;
    this.showImportFile = false;
    this.showSaveDialog = false;
  }

  startImport() {
    this.modal.showImportModal();

    this.showImportDialog = !this.showImportDialog;
    this.showExportDialog = false;
    this.showImportFile = false;
    this.showSaveDialog = false;
  }

  startSave() {
    this.showSaveDialog = !this.showSaveDialog;
    this.showImportDialog = false;
    this.showExportDialog = false;
    this.showImportFile = false;
  }

  import() {
    if (this.loadSaveName != '') {
      if (this.loadSaveName == 'Load Save from File') {
        this.showImportDialog = false;
        this.showImportFile = true;
        this.showSaveDialog = false;
      } else {
        this.saveName = this.loadSaveName;
        console.log(this.saving.load(this.loadSaveName));
      }
    }
  }

  saveAsFile(type: string) {
    let blob;
    let save = this.saving.serializeStateToJson(this.saveName);
    if (type == 'json') {
      blob = new Blob([save], { type: 'application/json;charset=utf-8' });
      FileSaver.saveAs(blob, this.saveName.replace(/\s/g, '_').toLowerCase() + '.json');
    }
    if (type == 'xml') {
      let xml = this.saving.saveAsXML(JSON.parse(save));
      blob = new Blob([xml], { type: 'text/xml;charset=utf-8' });
      FileSaver.saveAs(blob, this.saveName.replace(/\s/g, '_').toLowerCase() + '.xml');
    }
    this.showSaveDialog = false;
    this.saveType = 'this';
  }

  saveAsIMG() {

    //console.log(this.pagination.dashboards);

    //console.log(this.pagination.dashboards.toArray()[this.pagination.activeDashboard].elementContainer.nativeElement);
    html2canvas(this.pagination.dashboards.toArray()[this.pagination.activeDashboard].elementContainer.nativeElement, {
      useCORS: true, //By passing this option in function Cross origin images will be rendered properly in the downloaded version of the PDF
      allowTaint: true
    }).then(canvas => {
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = this.saveName + '.png';
      this.downloadLink.nativeElement.click();
    });
  }

  toggleGrid() {
    this.placement.gridEnabled = !this.placement.gridEnabled;
    const svg = document.getElementById('cf-grid-svg');
    const icon = document.getElementById('cf-toggle-icon');
    svg.classList.toggle('disabled');
    if (svg.classList.contains('disabled')) {
      icon.classList.remove('fa-toggle-on');
      icon.classList.add('fa-toggle-off');
    } else {
      icon.classList.remove('fa-toggle-off');
      icon.classList.add('fa-toggle-on');
    }
  }
}
