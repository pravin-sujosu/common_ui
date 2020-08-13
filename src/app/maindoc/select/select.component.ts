import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}   
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  selected = 'option2';
  code1= ` <mat-form-field appearance="fill">
  <mat-label>Select an option</mat-label>
  <mat-select [(value)]="selected">
    <mat-option>None</mat-option>
    <mat-option value="option1">Option 1</mat-option>
    <mat-option value="option2">Option 2</mat-option>
    <mat-option value="option3">Option 3</mat-option>
  </mat-select>
</mat-form-field>

<p>You selected: {{selected}}</p>`;
code = `<h4>Basic mat-select</h4>
<mat-form-field appearance="fill">
  <mat-label>Favorite food</mat-label>
  <mat-select>
    <mat-option *ngFor="let food of foods" [value]="food.value">
      {{food.viewValue}}
    </mat-option>
  </mat-select>
</mat-form-field>

<h4>Basic native select</h4>
<mat-form-field appearance="fill">
  <mat-label>Cars</mat-label>
  <select matNativeControl required>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</mat-form-field>
`;
api = `import {MatSelectModule} from '@angular/material/select';`;
  constructor() { }

  ngOnInit() {
  }

}
