import { Component, OnInit, Input } from '@angular/core';
// import { Property } from '../property';
import { SelectionService } from '../../selection.service';
import { PropertyState } from '../property-state';
import { trigger, style, animate, transition } from '@angular/animations';




@Component({
    selector: 'app-property-bar',
    templateUrl: './property-bar.component.html',
    styleUrls: ['./property-bar.component.scss'],
    animations: [
        trigger('htmlInOut', [
            // Fade in
            transition('void => *', [
                style({ transform: 'translateY(-30%) scale(0)', opacity: 0 }),
                animate('200ms ease-out', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
            ]),
            // Fade out
            transition('* => void', [
                style({ transform: 'translateY(0) scale(1)', opacity: 1 }),
                animate('200ms ease-out', style({ transform: 'translateY(-30%) scale(0)', opacity: 0 }))
            ])
        ]),
        trigger('cssInOut', [
            // Fade in
            transition('void => *', [
                style({ transform: 'translateY(-30%) scale(0)', opacity: 0 }),
                animate('200ms ease-out', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
            ]),
            // Fade out
            transition('* => void', [
                style({ transform: 'translateY(0) scale(1)', opacity: 1 }),
                animate('200ms ease-out', style({ transform: 'translateY(-30%) scale(0)', opacity: 0 }))
            ])
        ])
    ]
})



export class PropertyBarComponent implements OnInit {

    @Input()
    properties: PropertyState[];

    private htmlHidden = false;
    private cssHidden = false;
    private nativeFlowHidden = false;

    constructor(private selection: SelectionService) { }

    hidden = true;

    private toggleHtml(htmlHidden: boolean): void {
        this.htmlHidden = !htmlHidden;

    }

    private toggleCss(cssHidden: boolean): void {
        this.cssHidden = !cssHidden;
    }

    private checkCategories(category: string): boolean {
        for (let i = 0; i < Object.keys(this.properties).length; i++) {
            if (this.properties[i].property.category === category) {
                return true;
            }
        }
        return false;
    }

    ngOnInit() {
        this.selection.onSelectionChange.subscribe(
            val => {
                this.hidden = val.length === 0;

                if (val.length === 1) {
                    this.properties = val[0].propertyStates;
                }
            }
        );
    }
}
