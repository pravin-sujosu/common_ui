import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  code = `<button mat-raised-button>Basic</button>
  <button mat-raised-button color="primary">Primary</button>
  <button mat-raised-button color="accent">Accent</button>
  <button mat-raised-button color="warn">Warn</button>
  <button mat-raised-button disabled>Disabled</button>
  <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>`;
code1 = `<button mat-stroked-button>Basic</button>
<button mat-stroked-button color="primary">Primary</button>
<button mat-stroked-button color="accent">Accent</button>
<button mat-stroked-button color="warn">Warn</button>
<button mat-stroked-button disabled>Disabled</button>
<a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>`;
code2 = `    <button mat-flat-button>Basic</button>
<button mat-flat-button color="primary">Primary</button>
<button mat-flat-button color="accent">Accent</button>
<button mat-flat-button color="warn">Warn</button>
<button mat-flat-button disabled>Disabled</button>
<a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>`;
code3 = `<button mat-icon-button aria-label="Example icon button with a vertical three dot icon">
<mat-icon>more_vert</mat-icon>
</button>
<button mat-icon-button color="primary" aria-label="Example icon button with a home icon">
<mat-icon>home</mat-icon>
</button>
<button mat-icon-button color="accent" aria-label="Example icon button with a menu icon">
<mat-icon>menu</mat-icon>
</button>
<button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
<mat-icon>favorite</mat-icon>
</button>
<button mat-icon-button disabled aria-label="Example icon button with a open in new tab icon">
<mat-icon>open_in_new</mat-icon>
</button>`;
api = `import {MatBadgeModule} from '@angular/material/badge';`;
  constructor() { }

  ngOnInit() {
  }

}
