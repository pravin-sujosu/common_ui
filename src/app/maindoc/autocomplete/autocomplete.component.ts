import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }
  code = `<mat-autocomplete #auto="matAutocomplete">
  <mat-option *ngFor="let option of options" [value]="option">
    {{option}}
  </mat-option>
</mat-autocomplete>`;
inputtextcode = `<input type="text"
      placeholder="Pick one"
      aria-label="Number"
      matInput
      [formControl]="myControl"
      [matAutocomplete]="auto">`;
api = `import {MatAutocompleteModule} from '@angular/material/autocomplete';`;
  ngOnInit() {
  }

}
