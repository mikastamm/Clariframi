import { Injectable } from '@angular/core';
import { MockupElementStateService, MockupElementState } from './mockup-elements/mockup-element-state.service';
import { PaginationService } from './dashboard/pagination.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import * as xml2js from 'xml2js';
import { borderTopRightRadius } from 'html2canvas/dist/types/css/property-descriptors/border-radius';
import { MockupBaseComponent } from './mockup-elements/mockup-base/mockup-base.component';
import { ContainerElementComponent } from './mockup-elements/container-element/container-element.component';
import { ToolbarDataService } from './toolbar/services/toolbar-data.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SavingService {

  constructor(private stateService: MockupElementStateService, private pagination: PaginationService, private toolbarData: ToolbarDataService) {
    this.saveNames = JSON.parse(localStorage.getItem('saveNames')) || [];
  }
  saveNames = [];

  public serializeStateToJson(name: string): string {
    let state = {
      name: name,
      dashboardCount: this.pagination.dashboards.length,
      elementStates: Array.from(this.stateService.elementStates.values()).filter(this.checkHidden)
    } as Save;

    //Delete unsavable props
    state.elementStates.forEach(x => { x.propertyStates.forEach(x => delete x.onValueChange) });
    state.elementStates.forEach(x => { delete x.element });

    console.log(state);
    return JSON.stringify(state);
  }

  private checkHidden(state): boolean {
    return !state.isHidden;
  }

  save(name: string) {
    if (this.saveNames.indexOf(name) > -1) {
      this.saveNames[this.saveNames.indexOf(name)] = name;
    }
    else { this.saveNames.push(name); }
    localStorage.setItem('saveNames', JSON.stringify(this.saveNames));
    localStorage.setItem(name, this.serializeStateToJson(name));
  }

  /**
  * @returns an XML element of the state
  * @param json A JSON String (Not quite sure) that is used to create an XML Element
  */
  saveAsXML(json) {
    console.log(json);
    var b = new xml2js.Builder({ headless: true });
    return b.buildObject(json);
  }

  load(name: string) {
    let jsonState = localStorage.getItem(name);
    this.loadJson(jsonState);
  }

  loadJson(jsonState) {
    this.stateService.clearAllElements();
    let save;

    try { save = JSON.parse(jsonState) as Save; }
    catch (e) { save = jsonState as Save; }

    console.log(save);

    this.pagination.setDashboardCount(save.dashboardCount);

    let containerChildren: MockupElementState[] = []
    let createdComponents: MockupBaseComponent[] = [];
    setTimeout(() => {
      save.elementStates.forEach(state => {

        state.propertyStates.forEach(propertyState => {
          propertyState.onValueChange = new Subject<any>();

        });

        if (state.parentContainerId == undefined) {
          //load container-less elements
          let dashboard = this.pagination.dashboards.toArray()[state.canvasIndex] as DashboardComponent;
          let mockupComponent = dashboard.createMockupComponent(state);
          mockupComponent.attachToDashboard(dashboard.elementContainer, true);
          createdComponents.push(mockupComponent);
        }
        else {
          containerChildren.push(state);
        }
      });

      let tries = 0;
      //Add containerchildren to their container
      while (containerChildren.length != 0 && tries < 15) {
        tries++;
        containerChildren.forEach(containerChild => {
          createdComponents.forEach(component => {
            if (containerChild.parentContainerId == component.id) {
              let newComp = (component as ContainerElementComponent).addItem(this.toolbarData.getToolbarItemByName(containerChild.toolbarItemName), containerChild);
              createdComponents.push(newComp);
              containerChildren.splice(containerChildren.indexOf(containerChild), 1);
            }
          });
        });
      }
    }, 0);
  }

  loadFromFile(files: FileList) {
    console.log(files[0]);
    let json;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      if (files[0].type == "text/xml") {
        let parser = new xml2js.Parser({ explicitRoot: false, explicitArray: false });
        parser.parseString(fileReader.result, function (err, result) {
          json = result;
          console.log(typeof (json));
        })
      }
      else {
        json = JSON.parse(fileReader.result.toString());
        console.log(typeof (json));
      }
      this.loadJson(json)
    }
    fileReader.readAsText(files[0]);

  }

  getSaveNames() {
    return this.saveNames;
  }
}

export interface Save {
  name: string;
  dashboardCount: number;
  elementStates: MockupElementState[];
}
