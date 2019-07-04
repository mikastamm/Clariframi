import { MockupBaseComponent } from '../../mockup-elements/mockup-base/mockup-base.component';
import { Type } from '@angular/core';
import { Property } from '../../propertybar/property';

export interface ToolbarItem {
    name: string;
    element: Type<MockupBaseComponent>;
    properties: Property[];
}
