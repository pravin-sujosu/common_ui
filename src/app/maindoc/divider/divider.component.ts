import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
code = `<mat-divider></mat-divider>`;
code1 = `<mat-divider [inset]="true"></mat-divider>`;
code2 = `<mat-divider [vertical]="true"></mat-divider>`;
code3 = `<mat-list>
<h3 mat-subheader>Folders</h3>
<mat-list-item *ngFor="let folder of folders; last as last">
   <mat-icon mat-list-icon>folder</mat-icon>
   <h4 mat-line>{{folder.name}}</h4>
   <p mat-line class="demo-2"> {{folder.updated}} </p>
   <mat-divider [inset]="true" *ngIf="!last"></mat-divider>
</mat-list-item>
<mat-divider></mat-divider>
<h3 mat-subheader>Notes</h3>
<mat-list-item *ngFor="let note of notes">
   <mat-icon mat-list-icon>note</mat-icon>
   <h4 mat-line>{{note.name}}</h4>
   <p mat-line class="demo-2"> {{note.updated}} </p>
</mat-list-item>
</mat-list>`;
codeex = `<mat-list>
<mat-list-item>Item 1</mat-list-item>
<mat-divider></mat-divider>
<mat-list-item>Item 2</mat-list-item>
<mat-divider></mat-divider>
<mat-list-item>Item 3</mat-list-item>
</mat-list>`;
api =`import {MatDividerModule} from '@angular/material/divider';`;
  constructor() { }

  ngOnInit() {
  }

}
