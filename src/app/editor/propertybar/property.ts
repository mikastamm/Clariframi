import { ControlValueAccessor } from '@angular/forms';
import { PropertyBaseComponent } from './property-base/property-base.component';
import { Type } from '@angular/core';
import { Subject } from 'rxjs';

export interface Property {
    defaultValue: any;
    title: string;
    id: string;
    category: string;
    formControlComponent: Type<PropertyBaseComponent>;
}
