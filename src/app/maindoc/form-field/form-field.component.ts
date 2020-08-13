import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
codeex = `<div class="example-container">
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput>
</mat-form-field>
<br>
<mat-form-field appearance="fill">
  <mat-label>Select</mat-label>
  <mat-select>
    <mat-option value="option">Option</mat-option>
  </mat-select>
</mat-form-field>
<br>
<mat-form-field appearance="fill">
  <mat-label>Textarea</mat-label>
  <textarea matInput></textarea>
</mat-form-field>
</div>`;
code = `<p>
<mat-form-field appearance="legacy">
  <mat-label>Legacy form field</mat-label>
  <input matInput placeholder="Placeholder">
  <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
  <mat-hint>Hint</mat-hint>
</mat-form-field>
</p>
<p>
<mat-form-field appearance="standard">
  <mat-label>Standard form field</mat-label>
  <input matInput placeholder="Placeholder">
  <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
  <mat-hint>Hint</mat-hint>
</mat-form-field>
</p>
<p>
<mat-form-field appearance="fill">
  <mat-label>Fill form field</mat-label>
  <input matInput placeholder="Placeholder">
  <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
  <mat-hint>Hint</mat-hint>
</mat-form-field>
</p>
<p>
<mat-form-field appearance="outline">
  <mat-label>Outline form field</mat-label>
  <input matInput placeholder="Placeholder">
  <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
  <mat-hint>Hint</mat-hint>
</mat-form-field>
</p>`;
code2 =`<mat-form-field>
<mat-label></mat-label>
<input placeholder="Just a placeholder">
</mat-form-field>`;
api = `import {MatFormFieldModule} from '@angular/material/form-field';`;
  constructor() { }

  ngOnInit() {
  }

}
