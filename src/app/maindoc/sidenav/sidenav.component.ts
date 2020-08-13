import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  codeex = `<mat-drawer-container class="example-container">
  <mat-drawer mode="side" opened>Drawer content</mat-drawer>
  <mat-drawer-content>Main content</mat-drawer-content>
</mat-drawer-container>`;
api = `import {MatSidenavModule} from '@angular/material/sidenav';`;
  constructor() { }

  ngOnInit() {
  }

}
