import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  code = `<p>
  Default appearance:
  <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
    <mat-button-toggle value="bold">Bold</mat-button-toggle>
    <mat-button-toggle value="italic">Italic</mat-button-toggle>
    <mat-button-toggle value="underline">Underline</mat-button-toggle>
  </mat-button-toggle-group>
</p>

<p>
  Legacy appearance:
  <mat-button-toggle-group appearance="legacy" name="fontStyle" aria-label="Font Style">
    <mat-button-toggle value="bold">Bold</mat-button-toggle>
    <mat-button-toggle value="italic">Italic</mat-button-toggle>
    <mat-button-toggle value="underline">Underline</mat-button-toggle>
  </mat-button-toggle-group>
</p>`;
code1 = `<mat-button-toggle-group #group="matButtonToggleGroup">
<mat-button-toggle value="left" aria-label="Text align left">
  <mat-icon>format_align_left</mat-icon>
</mat-button-toggle>
<mat-button-toggle value="center" aria-label="Text align center">
  <mat-icon>format_align_center</mat-icon>
</mat-button-toggle>
<mat-button-toggle value="right" aria-label="Text align right">
  <mat-icon>format_align_right</mat-icon>
</mat-button-toggle>
<mat-button-toggle value="justify" disabled aria-label="Text align justify">
  <mat-icon>format_align_justify</mat-icon>
</mat-button-toggle>
</mat-button-toggle-group>
<div class="example-selected-value">Selected value: {{group.value}}</div>`;
code2 = `<mat-button-toggle-group name="fontStyle" aria-label="Font Style">
<mat-button-toggle value="bold">Bold</mat-button-toggle>
<mat-button-toggle value="italic">Italic</mat-button-toggle>
<mat-button-toggle value="underline">Underline</mat-button-toggle>
</mat-button-toggle-group>`;

api = `import {MatBadgeModule} from '@angular/material/badge';`;
  constructor() { }

  ngOnInit() {
  }

}
