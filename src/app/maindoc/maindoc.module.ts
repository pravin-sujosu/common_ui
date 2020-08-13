import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaindocRoutingModule } from './maindoc-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../core/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComponentsComponent } from './components/components.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { HighlightModule } from 'ngx-highlightjs';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonSheetComponent, BottomSheetOverviewExampleSheet } from './button-sheet/button-sheet.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent, DialogOverviewExampleDialog } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent1 } from './tooltip/tooltip.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DialogOverviewExampleDialog, BottomSheetOverviewExampleSheet, LayoutComponent, SidebarComponent, ComponentsComponent, AutocompleteComponent, BadgesComponent, ButtonsComponent, ButtonToggleComponent, ButtonSheetComponent, CardComponent, CheckboxComponent, ChipsComponent, DatepickerComponent, DialogComponent, DividerComponent, ExpandableComponent, FormFieldComponent, GridListComponent, IconComponent, InputComponent, ListComponent, MenuComponent, PaginatorComponent, ProgressBarComponent, ProgressSpinnerComponent, RadioButtonComponent, RipplesComponent, SelectComponent, SidenavComponent, SlideToggleComponent, SliderComponent, SnackBarComponent, SortHeaderComponent, StepperComponent, TableComponent, TabsComponent, ToolbarComponent, TooltipComponent1],
  imports: [
    CommonModule,
    MaindocRoutingModule,
    MaterialModule,
    HighlightModule,
    FormsModule
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet,
    DialogOverviewExampleDialog
  ],
})
export class MaindocModule { }
