import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
code2= `<mat-chip-list aria-label="Fish selection">
<mat-chip>One fish</mat-chip>
<mat-chip>Two fish</mat-chip>
<mat-chip color="primary" selected>Primary fish</mat-chip>
<mat-chip color="accent" selected>Accent fish</mat-chip>
</mat-chip-list>`;
code=`<mat-form-field class="example-chip-list">
<mat-chip-list #chipList aria-label="Fruit selection">
  <mat-chip
    *ngFor="let fruit of fruits"
    [selectable]="selectable"
    [removable]="removable"
    (removed)="remove(fruit)">
    {{fruit}}
    <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
  </mat-chip>
  <input
    placeholder="New fruit..."
    #fruitInput
    [formControl]="fruitCtrl"
    [matAutocomplete]="auto"
    [matChipInputFor]="chipList"
    [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
    (matChipInputTokenEnd)="add($event)">
</mat-chip-list>
<mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">
  <mat-option *ngFor="let fruit of filteredFruits | async" [value]="fruit">
    {{fruit}}
  </mat-option>
</mat-autocomplete>
</mat-form-field>`;
api = `import {MatChipsModule} from '@angular/material/chips';`;
  constructor() { }

  ngOnInit() {
  }

}
