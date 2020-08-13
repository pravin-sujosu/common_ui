import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  codeex = `<mat-tab-group>
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>`;
code2 = `<ng-template mat-tab-label>
<mat-icon class="example-tab-icon">thumb_up</mat-icon>
First
</ng-template>`;
code3 = `<nav mat-tab-nav-bar [backgroundColor]="background">
<a mat-tab-link *ngFor="let link of links"
   (click)="activeLink = link"
   [active]="activeLink == link"> {{link}} </a>
<a mat-tab-link disabled>Disabled Link</a>
</nav>`;
api = `import {MatTabsModule} from '@angular/material/tabs';`;
  constructor() { }

  ngOnInit() {
  }

}
