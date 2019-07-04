import { Property } from './property';
import { Subject } from 'rxjs';

export class PropertyState {
    property: Property;
    public _value: any;
    public get value(): any {
        return this._value;
    }
    public set value(v: any) {
        this._value = v;
        this.onValueChange.next(this._value);
    }
    onValueChange: Subject<any> = new Subject<any>();
}
