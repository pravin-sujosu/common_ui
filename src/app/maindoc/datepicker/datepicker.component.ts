import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
 code2=`<mat-form-field appearance="fill">
 <mat-label>Choose a date</mat-label>
 <input matInput [matDatepicker]="picker">
 <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
 <mat-datepicker #picker></mat-datepicker>
</mat-form-field>`;
code=`<input matInput [matDatepicker]="picker">
<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
<mat-datepicker #picker></mat-datepicker>`;
code1=`<mat-form-field appearance="fill">
<mat-label>Choose a date</mat-label>
<input matInput [matDatepicker]="picker">
<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
<mat-datepicker #picker></mat-datepicker>
</mat-form-field>`;
api= `import {MatDatepickerModule} from '@angular/material/datepicker';`;
  constructor() { }

  ngOnInit() {
  }

}
