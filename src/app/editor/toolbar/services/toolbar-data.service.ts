import { Injectable, OnInit } from '@angular/core';
import { ToolbarCategory } from '../category/toolbar-category';
import { ToolbarItem } from '../items/toolbar-item';
import { TestComponent } from '../../mockup-elements/test/test.component';
import { ParagraphElementComponent } from '../../mockup-elements/paragraph-element/paragraph-element.component';
import { ImageElementComponent } from '../../mockup-elements/image-element/image-element.component';
import { IconElementComponent } from '../../mockup-elements/icon-element/icon-element.component';
import { ButtonElementComponent } from '../../mockup-elements/button-element/button-element.component';
import { Property } from '../../propertybar/property';
// import { TextPropertyComponent } from '../../propertybar/property-types/text-property/text-property.component';
// import { TextAreaPropertyComponent } from '../../propertybar/property-types/text-area-property/text-area-property.component';
import { Subject } from 'rxjs';
import { RadioElementComponent } from '../../mockup-elements/radio-element/radio-element.component';
import { TextareaElementComponent } from '../../mockup-elements/textarea-element/textarea-element.component';
import { CheckboxElementComponent } from '../../mockup-elements/checkbox-element/checkbox-element.component';
import { TextfieldElementComponent } from '../../mockup-elements/textfield-element/textfield-element.component';
import { PlaceholderElementComponent } from "../../mockup-elements/placeholder-element/placeholder-element.component";
import { ToggleElementComponent } from '../../mockup-elements/toggle-element/toggle-element.component';
// import { CheckboxPropertyComponent } from "../../propertybar/property-types/checkbox-property/checkbox-property.component";
import { MobilebuttonElementComponent } from "../../mockup-elements/mobilebutton-element/mobilebutton-element.component";
import { BurgerElementComponent } from "../../mockup-elements/burger-element/burger-element.component";
// import { DropdownPropertyComponent } from "../../propertybar/property-types/dropdown-property/dropdown-property.component";
import { InputElementComponent } from "../../mockup-elements/input-element/input-element.component";
import { DropdownListOptions } from "../../propertybar/property-types/dropdown-property/dropdown-list-options";
// import { RadioPropertyComponent } from "../../propertybar/property-types/radio-property/radio-property.component";
import { RadioOptions } from "../../propertybar/property-types/radio-property/radio-options";
// import { ColorPropertyComponent } from "../../propertybar/property-types/color-property/color-property.component";
import { PropService } from '../../propertybar/prop.service';
import { RectangleElementComponent } from "../../mockup-elements/rectangle-element/rectangle-element.component";
import { CircleElementComponent } from "../../mockup-elements/circle-element/circle-element.component";
import { CheckboxOptions } from "../../propertybar/property-types/checkbox-property/checkbox-options";
import { PaginationService } from "../../dashboard/pagination.service";
import { ContainerElementComponent } from '../../mockup-elements/container-element/container-element.component';
import { EditButtonComponent } from "../../mockup-elements/edit-button/edit-button.component";
import { ForwardElementComponent } from "../../mockup-elements/forward-element/forward-element.component";
import { BackElementComponent } from "../../mockup-elements/back-element/back-element.component";
import { HrElementComponent } from "../../mockup-elements/hr-element/hr-element.component";

@Injectable({
  providedIn: 'root'
})
export class ToolbarDataService implements OnInit {


  private toolbarData: ToolbarCategory[];


  public getToolbarItemByName(name: string): ToolbarItem {
    let data = this.getDefaultToolbarData();
    let item;
    data.forEach(category => {
      category.items.forEach(toolbarItem => {
        if (toolbarItem.name == name)
          item = toolbarItem;
      });
    });
    return item;
  }



  // Returns the starting values for the Toolbar and its items
  // Use this to configure Category/Element/Properties
  getDefaultToolbarData(): ToolbarCategory[] {
    let textCategory =
      {
        name: "Text",
        faIconClass: "fa-font",
        items: [
          //Label item
          {
            name: "Label",
            element: TestComponent,
            properties: [
              this.propService.getLabelProperty('html'),
              this.propService.getCheckboxProperty(CheckboxOptions.FontStyleOptions, 'Font Style', 'fontStyle'),
              this.propService.getLabelProperty('css', '2', 'Font Size', 'fontSize'),
              this.propService.getDropdownProperty('css', DropdownListOptions.UnitOptions, 'CSS Unit', 'unit'),
              this.propService.getColorProperty(),
              this.propService.getColorProperty('transparent', 'Background Color', 'bgColor'),
              this.propService.getSliderProperty(0.05, 1, 1, 'Opacity', 'opacity', 0.05),
              this.propService.getBinProperty(),
            ]
          } as ToolbarItem,
          //Paragraph item
          {
            name: "Paragraph",
            element: ParagraphElementComponent,
            properties: [
              this.propService.getTextAreaProperty(),
              this.propService.getRadioProperty(RadioOptions.AlignOptions, 'Alignment', 'align'),
              this.propService.getLabelProperty('css', '2', 'Font Size', 'fontSize'),
              this.propService.getDropdownProperty('css', DropdownListOptions.UnitOptions, 'CSS Unit', 'unit'),
              this.propService.getLabelProperty('css', '200px', 'Width', 'width'),
              this.propService.getColorProperty(),
              this.propService.getColorProperty('transparent', 'Background Color', 'bgColor'),
              this.propService.getSliderProperty(0.05, 1, 1, 'Opacity', 'opacity', 0.05),
              this.propService.getBinProperty(),
            ]
          } as ToolbarItem,
          //Checkbox item
          {
            name: "Checkbox",
            element: CheckboxElementComponent,
            properties: [
              this.propService.getLabelProperty('html', 'Option'),
              this.propService.getLabelProperty('html', '', 'Name', 'name'),
              this.propService.getLabelProperty('html', '', 'Value', 'value'),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          //Radio button item
          {
            name: "Radio Button",
            element: RadioElementComponent,
            properties: [
              this.propService.getLabelProperty('html', 'Option'),
              this.propService.getLabelProperty('html', '', 'Name', 'name'),
              this.propService.getLabelProperty('html', '', 'Value', 'value'),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          //Text Field item
          {
            name: "Text Field",
            element: TextfieldElementComponent,
            properties: [
              this.propService.getLabelProperty('html', 'Lorem ipsum', 'Placeholder'),
              this.propService.getLabelProperty('html', '', 'Name', 'name'),
              this.propService.getLabelProperty('html', '', 'Value', 'value'),
              this.propService.getLabelProperty('css', '', 'Width', 'width'),
              this.propService.getLabelProperty('css', '', 'Height', 'height'),
              this.propService.getColorProperty('#FFFFFF', 'Background Color', 'bgColor'),
              this.propService.getBinProperty(),
            ],
          } as ToolbarItem,
          //Text area item
          {
            name: "Text Area",
            element: TextareaElementComponent,
            properties: [
              this.propService.getTextAreaProperty(),
              this.propService.getDropdownProperty('html', ['2', '3', '4', '5', '6'], 'Rows', 'rows'),
              this.propService.getLabelProperty('html', '50', 'Cols', 'width'),
              this.propService.getLabelProperty('html', '', 'Name', 'name'),
              this.propService.getColorProperty('#FFFFFF', 'Background Color', 'bgColor'),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          //Input item
          {
            name: "Input",
            element: InputElementComponent,
            properties: [
              this.propService.getLabelProperty('html', 'Im a placeholder', 'Placeholder', 'text'),
              this.propService.getDropdownProperty('html', DropdownListOptions.InputOptions, 'Input Type', 'input'),
              this.propService.getLabelProperty('html', '', 'Name', 'name'),
              this.propService.getLabelProperty('html', '', 'Value', 'value'),
              this.propService.getLabelProperty('css', '', 'Width', 'width'),
              this.propService.getLabelProperty('css', '', 'Height', 'height'),
              this.propService.getBinProperty(),
            ]
          } as ToolbarItem,
        ]
      } as ToolbarCategory;

    let iconsCategory =
      //Icons category
      {
        name: "Icons",
        faIconClass: "fa-picture-o",
        items: [
          //Icon item
          {
            name: "Icon",
            element: IconElementComponent,
            properties: [
              this.propService.getLabelProperty('html', 'bug', 'Font Awesome Icon Name', 'name'),
              this.propService.getLabelProperty('css', '2', 'Font Size', 'fontSize'),
              this.propService.getDropdownProperty('css', DropdownListOptions.UnitOptions, 'CSS Unit', 'unit'),
              this.propService.getColorProperty('#000000', 'Color'),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          //Image item
          {
            name: "Image",
            element: ImageElementComponent,
            properties: [
              this.propService.getLabelProperty('html', 'http://www.haustier-news.de/wp-content/uploads/2017/02/Katzenbilder-zum-Schluss.jpg', 'Source', 'src'),
              this.propService.getLabelProperty('html', '', 'Alt'),
              this.propService.getLabelProperty('css', '200px', 'Width', 'width'),
              this.propService.getLabelProperty('css', 'auto', 'Height', 'height'),
              this.propService.getSliderProperty(0.05, 1, 1, 'Opacity', 'opacity', 0.05),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          //Placeholder item
          {
            name: "Placeholder",
            element: PlaceholderElementComponent,
            properties: [
              this.propService.getLabelProperty('css', '200px', 'Width', 'width'),
              this.propService.getLabelProperty('css', '150px', 'Height', 'height'),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem
        ]
      } as ToolbarCategory;

    let buttonCategory =
      {
        name: "Buttons",
        faIconClass: "fa-map-signs",
        items: [
          //Button item
          {
            name: "Button",
            element: ButtonElementComponent,
            properties: [
              this.propService.getLabelProperty('html', 'Button', 'Value'),
              this.propService.getLabelProperty('css', '2', 'Font Size', 'fontSize'),
              this.propService.getDropdownProperty('css', DropdownListOptions.UnitOptions, 'CSS Unit', 'unit'),
              this.propService.getLabelProperty('css', '', 'Border Style', 'bStyle'),
              this.propService.getLabelProperty('css', '0px', 'Border Radius', 'radius'),
              this.propService.getColorProperty('#E7E7E7', 'Background Color', 'bgColor'),
              this.propService.getLabelProperty('html', '0', 'Selected Page', 'page'),
              this.propService.getBinProperty(),
            ],
          } as ToolbarItem,
          //Mobile Button
          {
            name: "Mobile Button",
            element: MobilebuttonElementComponent,
            properties: [
              this.propService.getColorProperty('#234459', 'Background Color'),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          //Edit Button
          {
            name: "Edit Button",
            element: EditButtonComponent,
            properties: [
              this.propService.getColorProperty('#234459', 'Background Color'),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          //Back Button
          {
            name: "Back Button",
            element: BackElementComponent,
            properties: [
              this.propService.getColorProperty('#234459', 'Background Color'),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          //Forward Button
          {
            name: "Forward Button",
            element: ForwardElementComponent,
            properties: [
              this.propService.getColorProperty('#234459', 'Background Color'),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          {
            name: "Toggle Button",
            element: ToggleElementComponent,
            properties: [
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          {
            name: "Burger Menu",
            element: BurgerElementComponent,
            properties: [
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem
        ]
      } as ToolbarCategory;

    let geometryCategory =
      {
        name: "Other",
        faIconClass: "fas fa-square",
        items: [
          //Rectangle item
          {
            name: "REKTangle",
            element: RectangleElementComponent,
            properties: [
              this.propService.getLabelProperty('css', '200px', 'Width', 'width'),
              this.propService.getLabelProperty('css', '150px', 'Height', 'height'),
              this.propService.getColorProperty('#CCCCCC', 'Fill Color'),
              this.propService.getSliderProperty(0.05, 1, 1, 'Opacity', 'opacity', 0.05),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          //Circle item
          {
            name: "Circle",
            element: CircleElementComponent,
            properties: [
              this.propService.getLabelProperty('css', '100px', 'Width', 'width'),
              this.propService.getLabelProperty('css', '100px', 'Height', 'height'),
              this.propService.getColorProperty('#CCCCCC', 'Fill Color'),
              this.propService.getLabelProperty('css', '50px', 'Center X', 'cx'),
              this.propService.getLabelProperty('css', '50px', 'Center Y', 'cy'),
              this.propService.getLabelProperty('css', '50px', 'Radius', 'r'),
              this.propService.getSliderProperty(0.05, 1, 1, 'Opacity', 'opacity', 0.05),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          //Container item
          {
            name: "Native-Flow Container",
            element: ContainerElementComponent,
            properties: [
              this.propService.getSliderProperty(0, 800, 370, 'Width', 'width', 1, 'css'),
              this.propService.getSliderProperty(0, 1000, 250, 'Height', 'height', 1, 'css'),
              this.propService.getColorProperty('#FFFFFF', 'Background Color', "background"),
              this.propService.getSliderProperty(0, 255, 0, 'Background Opacity', 'background-o', 1, 'css'),
              this.propService.getColorProperty('#000000', 'Border Color', 'borderColor'),
              this.propService.getSliderProperty(0, 255, 255, 'Border Opacity', 'border-o', 1, 'css'),

              this.propService.getBinProperty(),
            ],

          } as ToolbarItem,
          {
            //HR Item
            name: "HR(4)",
            element: HrElementComponent,
            properties: [
              this.propService.getSliderProperty(1, 100, 50, 'Width', 'width'),
              this.propService.getBinProperty(),
            ],

          } as ToolbarItem
        ]
      } as ToolbarCategory;

    let categories = [
      textCategory,
      iconsCategory,
      buttonCategory,
      geometryCategory,
    ];
    console.log(categories);
    return categories;
  }

  constructor(
    private propService: PropService,
    private pagination: PaginationService
  ) {
    this.toolbarData = this.getDefaultToolbarData();

  }

  ngOnInit(): void {

  }

  //Returns the data that gets displayed in the toolbar (Categories and their items)
  public getToolbarData(): ToolbarCategory[] {
    return this.toolbarData;
  }
}
