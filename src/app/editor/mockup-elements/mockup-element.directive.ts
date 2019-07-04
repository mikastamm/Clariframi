import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
import { SelectionService } from '../selection.service';
//import { SelectedItem } from '../selection.service';
import { ToolbarItem } from '../toolbar/items/toolbar-item';
import { MockupBaseComponent } from './mockup-base/mockup-base.component';
import TweenLite from 'gsap';
import TweenMax from 'gsap';
import CustomWiggle from 'gsap';
import { Sine, Elastic, Power1, Power2, Bounce } from 'gsap/all';
import { MockupElementStateService, MockupElementState } from './mockup-element-state.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[mockup-element]'
})
export class MockupElementDirective {

    // tweenShake: TweenMax;
  // shakeFunction: any;
  animationState: boolean;
  selectionSub: Subscription;
  @Input('mockup-base') base: MockupBaseComponent;

  constructor(private elem: ElementRef, private renderer: Renderer2, private selection: SelectionService, private stateService: MockupElementStateService) {
    this.selectionSub = selection.onSelectionChange.subscribe(val => this.onSelectionChange(val));
    stateService.onDelete.subscribe(val => this.onDelete());
    this.animationState = false;

    /* this.base is not defined*/
    // console.log('Base: ' + this.base);
    // console.log(this.base.state.isFake);

    /* Animate dropping  effect */
    TweenMax.to(this.elem.nativeElement, 0.2, { scale: 1.1, autoAlpha: 1 });
    TweenMax.to(this.elem.nativeElement, 0.4, { scale: 1, ease: Bounce.easeOut });

  }

  private onDelete() {
    this.elem.nativeElement.remove();
    if (this.selectionSub && !this.selectionSub.closed) {
      this.selectionSub.unsubscribe();
    }
  }

@HostListener("touchstart", ["$event"])
private touchstart(event){
  console.log("isDragging=tru");
  this.selection.isDragging = true;
}

@HostListener("touchend", ["$event"])
private touchend(event){
  console.log("isDragging=fals");
  this.selection.isDragging = false;
  return true;
}

  private onSelectionChange(selection: MockupElementState[]) {
    // Check if this mockup component is in the selected items
    let isThisSelected = false;
    const base = this.base;
    selection.forEach(selectedItem => {
      if (base.state && base.state.elementId == selectedItem.elementId) {
        isThisSelected = true;
      }
    });

    if (isThisSelected) {
      this.renderer.addClass(this.elem.nativeElement, 'selectedMockupComponent');
      this.playSelectedAnimation();

    } else {
      this.renderer.createElement;
      this.renderer.removeClass(this.elem.nativeElement, 'selectedMockupComponent');
    }
  }

  @HostListener('click', ['$event']) onClick($event) {
    this.selection.selected = [this.base.state];
    event.stopPropagation();
  }


  playSelectedAnimation() {
    if (this.animationState == false) {
      // if(!this.tweenShake.isActive())

      /* Animate shaking effect when selected */


      TweenMax.fromTo(
        this.elem.nativeElement, 0.15, { x: '-=5' },
        {
          x: '+=10', yoyo: true, ease: Sine.easeInOut,
          onStart() {
            this.animationState = true;
          },
          onComplete() {
            TweenMax.to(this.target, 0.5, {
              x: '-=5', ease: Elastic.easeOut,
              onStart() {
                this.animationState = true;
              },
              onComplete() {
                this.animationState = false;
              }
            });
          }
        });
    }
  }

}
