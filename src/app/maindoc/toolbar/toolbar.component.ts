import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
codeex= `<p>
<mat-toolbar>
  <span>My Application</span>
</mat-toolbar>
</p>

<p>
<mat-toolbar>
 <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
  <mat-icon>menu</mat-icon>
</button>
<span>My App</span>
<span class="example-spacer"></span>
<button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
  <mat-icon>favorite</mat-icon>
</button>
<button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
 <mat-icon>share</mat-icon>
</button>
</mat-toolbar>
</p>

<p>
<mat-toolbar color="primary">
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
    <mat-icon>share</mat-icon>
  </button>
</mat-toolbar>
</p>

<p>
<mat-toolbar color="primary">
  <mat-toolbar-row>
    <span>My App</span>
    <span class="example-spacer"></span>
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
      <mat-icon>menu</mat-icon>
    </button>
  </mat-toolbar-row>

  <mat-toolbar-row>
    <span>Second Line</span>
    <span class="example-spacer"></span>
    <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
      <mat-icon>favorite</mat-icon>
    </button>
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
      <mat-icon>share</mat-icon>
    </button>
  </mat-toolbar-row>
</mat-toolbar>
</p>`;
  constructor() { }

  ngOnInit() {
  }

}
