import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsComponent } from './components/components.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonSheetComponent } from './button-sheet/button-sheet.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
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
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent1 } from './tooltip/tooltip.component';




const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: AutocompleteComponent
      },
      {
        path:'autocomplete',
        component: AutocompleteComponent
      },
      {
        path:'badge',
        component: BadgesComponent
      },
      {
        path:'buttons',
        component: ButtonsComponent
      },
      {
        path: 'button-toggle',
        component: ButtonToggleComponent
      },
      {
        path: 'button-sheet',
        component: ButtonSheetComponent
      },
      {
        path: 'card',
        component: CardComponent
      },
      {
        path: 'checkbox',
        component: CheckboxComponent
      },
      {
        path: 'chips',
        component: ChipsComponent
      },
      {
        path: 'datepicker',
        component: DatepickerComponent
      },
      {
        path: 'dialog',
        component: DialogComponent
      },
      {
        path: 'divider',
        component: DividerComponent
      },
      {
        path: 'expansion',
        component: ExpandableComponent
      },
      {
        path: 'form-field',
        component: FormFieldComponent
      },
      {
        path: 'grid-list',
        component: GridListComponent
      },
      {
        path: 'icon',
        component: IconComponent
      },
      {
        path: 'input',
        component: InputComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'paginator',
        component: PaginatorComponent
      },
      {
        path: 'progress-bar',
        component: ProgressBarComponent
      },
      {
        path: 'progress-spinner',
        component: ProgressSpinnerComponent
      },
      {
        path: 'radio-button',
        component: RadioButtonComponent
      },
      {
        path: 'ripples',
        component: RipplesComponent
      },
      {
        path: 'select',
        component: SelectComponent
      },
      {
        path: 'sidenav',
        component: SidenavComponent
      },
      {
        path: 'slide-toggle',
        component: SlideToggleComponent
      },
      {
        path: 'slider',
        component: SliderComponent
      },
      {
        path: 'snack-bar',
        component: SnackBarComponent
      },
      {
        path: 'sort-header',
        component: SortHeaderComponent
      },
      {
        path: 'stepper',
        component: SortHeaderComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      },
      {
        path: 'toolbar',
        component: ToolbarComponent
      },
      {
        path: 'tooltip',
        component: TooltipComponent1
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaindocRoutingModule { }
