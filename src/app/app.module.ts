import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor/editor.component';
import { ToolbarComponent } from './editor/toolbar/toolbar.component';
import { DashboardComponent } from './editor/dashboard/dashboard.component';
import { ToolbarCategorySelectorComponent } from './editor/toolbar/category/toolbar-category-selector/toolbar-category-selector.component';
import { ToolbarItemBarComponent } from './editor/toolbar/items/toolbar-item-bar/toolbar-item-bar.component';
import { ToolbarCategoryElementComponent } from './editor/toolbar/category/toolbar-category-element/toolbar-category-element.component';
import { ToolbarItemElementComponent } from './editor/toolbar/items/toolbar-item-element/toolbar-item-element.component';
import { MockupBaseComponent } from './editor/mockup-elements/mockup-base/mockup-base.component';
import { TestComponent } from './editor/mockup-elements/test/test.component';
import { ParagraphElementComponent } from './editor/mockup-elements/paragraph-element/paragraph-element.component';
import { GridComponent } from './editor/dashboard/grid/grid.component';
import { NavbarComponent } from './editor/navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ToolbarItemWrapperComponent } from './editor/toolbar/items/toolbar-item-wrapper/toolbar-item-wrapper.component';
import { ImageElementComponent } from './editor/mockup-elements/image-element/image-element.component';
import { IconElementComponent } from './editor/mockup-elements/icon-element/icon-element.component';
import { ButtonElementComponent } from './editor/mockup-elements/button-element/button-element.component';
import { PropertyBarComponent } from './editor/propertybar/property-bar/property-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyBaseComponent } from './editor/propertybar/property-base/property-base.component';
import { TextPropertyComponent } from './editor/propertybar/property-types/text-property/text-property.component';
import { MockupElementDirective } from './editor/mockup-elements/mockup-element.directive';
import { PropertyWrapperComponent } from './editor/propertybar/property-wrapper/property-wrapper.component';
import { TextAreaPropertyComponent } from './editor/propertybar/property-types/text-area-property/text-area-property.component';
import { CheckboxPropertyComponent } from './editor/propertybar/property-types/checkbox-property/checkbox-property.component';
import { RadioElementComponent } from './editor/mockup-elements/radio-element/radio-element.component';
import { TextareaElementComponent } from './editor/mockup-elements/textarea-element/textarea-element.component';
import { CheckboxElementComponent } from './editor/mockup-elements/checkbox-element/checkbox-element.component';
import { TextfieldElementComponent } from './editor/mockup-elements/textfield-element/textfield-element.component';
import { PlaceholderElementComponent } from './editor/mockup-elements/placeholder-element/placeholder-element.component';
import { ToggleElementComponent } from './editor/mockup-elements/toggle-element/toggle-element.component';
import { MobilebuttonElementComponent } from './editor/mockup-elements/mobilebutton-element/mobilebutton-element.component';
import { BurgerElementComponent } from './editor/mockup-elements/burger-element/burger-element.component';
import { DropdownPropertyComponent } from './editor/propertybar/property-types/dropdown-property/dropdown-property.component';
import { InputElementComponent } from './editor/mockup-elements/input-element/input-element.component';
import { RadioPropertyComponent } from './editor/propertybar/property-types/radio-property/radio-property.component';
import { ColorPropertyComponent } from './editor/propertybar/property-types/color-property/color-property.component';
import { DashboardContainerComponent } from './editor/dashboard/dashboard-container/dashboard-container.component';
import { PaginationBarComponent } from './editor/dashboard/pagination-bar/pagination-bar.component';
import { SliderPropertyComponent } from './editor/propertybar/property-types/slider-property/slider-property.component';
import { RectangleElementComponent } from './editor/mockup-elements/rectangle-element/rectangle-element.component';
import { CircleElementComponent } from './editor/mockup-elements/circle-element/circle-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BinPropertyComponent } from './editor/propertybar/property-types/bin-property/bin-property.component';
import { ContainerElementComponent } from './editor/mockup-elements/container-element/container-element.component';
import { SelectionAreaComponent } from './editor/dashboard/selection-area/selection-area.component';
import { ModalComponent } from './editor/modal/modal.component';
import { EditButtonComponent } from './editor/mockup-elements/edit-button/edit-button.component';
import { BackElementComponent } from './editor/mockup-elements/back-element/back-element.component';
import { ForwardElementComponent } from './editor/mockup-elements/forward-element/forward-element.component';
import { HrElementComponent } from './editor/mockup-elements/hr-element/hr-element.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ToolbarComponent,
    DashboardComponent,
    ToolbarCategorySelectorComponent,
    ToolbarItemBarComponent,
    ToolbarCategoryElementComponent,
    ToolbarItemElementComponent,
    MockupBaseComponent,
    TestComponent,
    ParagraphElementComponent,
    GridComponent,
    NavbarComponent,
    ToolbarItemWrapperComponent,
    ImageElementComponent,
    IconElementComponent,
    ButtonElementComponent,
    PropertyBarComponent,
    PropertyBaseComponent,
    TextPropertyComponent,
    MockupElementDirective,
    PropertyWrapperComponent,
    TextAreaPropertyComponent,
    RadioElementComponent,
    TextareaElementComponent,
    CheckboxPropertyComponent,
    CheckboxElementComponent,
    TextfieldElementComponent,
    PlaceholderElementComponent,
    ToggleElementComponent,
    MobilebuttonElementComponent,
    BurgerElementComponent,
    DropdownPropertyComponent,
    InputElementComponent,
    RadioPropertyComponent,
    ColorPropertyComponent,
    DashboardContainerComponent,
    PaginationBarComponent,
    SliderPropertyComponent,
    RectangleElementComponent,
    CircleElementComponent,
    BinPropertyComponent,
    ContainerElementComponent,
    SelectionAreaComponent,
    ModalComponent,
    EditButtonComponent,
    BackElementComponent,
    ForwardElementComponent,
    HrElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    TestComponent,
    ParagraphElementComponent,
    ImageElementComponent,
    IconElementComponent,
    ButtonElementComponent,
    ToggleElementComponent,
    ToolbarItemWrapperComponent,
    RadioElementComponent,
    TextPropertyComponent,
    TextAreaPropertyComponent,
    TextareaElementComponent,
    CheckboxElementComponent,
    TextfieldElementComponent,
    PlaceholderElementComponent,
    MobilebuttonElementComponent,
    ContainerElementComponent,
    BurgerElementComponent,
    DropdownPropertyComponent,
    InputElementComponent,
    RadioPropertyComponent,
    ColorPropertyComponent,
    CheckboxPropertyComponent,
    SliderPropertyComponent,
    RectangleElementComponent,
    CircleElementComponent,
    SelectionAreaComponent,
    BinPropertyComponent,
    EditButtonComponent,
    BackElementComponent,
    ForwardElementComponent,
    HrElementComponent,
  ],
  providers: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
