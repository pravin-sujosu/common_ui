import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 codeex = `<button mat-button [matMenuTriggerFor]="menu">Menu</button>
 <mat-menu #menu="matMenu">
   <button mat-menu-item>Item 1</button>
   <button mat-menu-item>Item 2</button>
 </mat-menu>`;
 code = `<button mat-button [matMenuTriggerFor]="menu">Menu</button>`;
 code1 = `class MyComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
}`;
code2 =`<button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
<mat-icon>more_vert</mat-icon>
</button>
<mat-menu #menu="matMenu">
<button mat-menu-item>
  <mat-icon>dialpad</mat-icon>
  <span>Redial</span>
</button>
<button mat-menu-item disabled>
  <mat-icon>voicemail</mat-icon>
  <span>Check voice mail</span>
</button>
<button mat-menu-item>
  <mat-icon>notifications_off</mat-icon>
  <span>Disable alerts</span>
</button>
</mat-menu>`;
api = `import {MatMenuModule} from '@angular/material/menu';`;
  constructor() { }

  ngOnInit() {
  }

}
