import { Injectable } from '@angular/core';
import { Property } from './property';
import { TextPropertyComponent } from './property-types/text-property/text-property.component';
import { ColorPropertyComponent } from './property-types/color-property/color-property.component';
import { DropdownPropertyComponent } from './property-types/dropdown-property/dropdown-property.component';
import { TextAreaPropertyComponent } from './property-types/text-area-property/text-area-property.component';
import { RadioPropertyComponent } from './property-types/radio-property/radio-property.component';
import { CheckboxPropertyComponent } from './property-types/checkbox-property/checkbox-property.component';
import { SliderPropertyComponent } from './property-types/slider-property/slider-property.component';
import { SliderValue } from './property-types/slider-property/slider-value';
import { BinPropertyComponent } from "./property-types/bin-property/bin-property.component";

@Injectable({
  providedIn: 'root'
})
export class PropService {

  private labelProperty: Property
    = {
      defaultValue: '',
      title: '',
      id: '',
      category: '',
      formControlComponent: TextPropertyComponent,
    };

  private colorProperty: Property
    = {
      defaultValue: '',
      title: '',
      id: '',
      category: 'css',
      formControlComponent: ColorPropertyComponent,
    };

  private dropdownProperty: Property
    = {
      defaultValue: null,
      title: '',
      id: '',
      category: '',
      formControlComponent: DropdownPropertyComponent,
    };

  private radioProperty: Property
    = {
      defaultValue: null,
      title: '',
      id: '',
      category: 'css',
      formControlComponent: RadioPropertyComponent,
    };

  private textAreaProperty: Property
    = {
      defaultValue: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd',
      title: '',
      id: '',
      category: 'html',
      formControlComponent: TextAreaPropertyComponent,
    };

  private checkboxProperty: Property
    = {
      defaultValue: null,
      title: '',
      id: '',
      category: 'css',
      formControlComponent: CheckboxPropertyComponent,
    };

  private sliderProperty: Property
    = {
      defaultValue: {
          min: null,
          max: null,
          step: null,
          value: null
      } as SliderValue,
      title: '',
      id: '',
      category: '',
      formControlComponent: SliderPropertyComponent,
  };

    private binProperty: Property
        = {
      defaultValue: false,
      title: '',
      id: 'bin',
      category: 'bin',
      formControlComponent: BinPropertyComponent,
    };

  constructor() { }

  public getLabelProperty(category: string, defValue = 'Im a label', title = 'Text', id = 'text'): Property {
    let label = Object.assign({}, this.labelProperty);
    label.defaultValue = defValue;
    label.title = title;
    label.id = id;
    label.category = category;
    return label;
  }

  public getColorProperty(defValue = '#000000', title = 'Text Color', id = 'color'): Property {
    let color = Object.assign({}, this.colorProperty);
    color.defaultValue = defValue;
    color.title = title;
    color.id = id;
    return color;
  }

  public getDropdownProperty(category: string, optionList: any[], title: string, id: string): Property {
    let dropdown = Object.assign({}, this.dropdownProperty);
    dropdown.defaultValue = optionList;
    dropdown.title = title;
    dropdown.id = id;
    dropdown.category = category;
    return dropdown;
  }

  public getTextAreaProperty(title = 'Text', id = 'text'): Property {
    let textArea = Object.assign({}, this.textAreaProperty);
    textArea.title = title;
    textArea.id = id;
    return textArea;
  }

  public getRadioProperty(optionList: any[], title: string, id: string): Property {
    let radio = Object.assign({}, this.radioProperty);
    radio.defaultValue = optionList;
    radio.title = title;
    radio.id = id;
    return radio;
  }

  public getCheckboxProperty(optionList: object, title: string, id: string): Property {
    let checkbox = Object.assign({}, this.checkboxProperty);
    checkbox.defaultValue = optionList;
    checkbox.title = title;
    checkbox.id = id;
    return checkbox;
  }

  public getSliderProperty(min: number, max: number, value: number, title: string, id: string, step = 1, category = 'css'): Property {
      let slider = Object.assign({}, this.sliderProperty);
      slider.defaultValue = Object.assign({}, this.sliderProperty.defaultValue);
      slider.defaultValue.min = min;
      slider.defaultValue.max = max;
      slider.defaultValue.step = step;
      slider.defaultValue.value = value;
      slider.title = title;
      slider.id = id;
      slider.category = category;
      return slider;
    }

    public getBinProperty(): Property {
        return this.binProperty;
    }
}
