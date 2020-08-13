import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
codeex = `<mat-list role="list">
<mat-list-item role="listitem">Item 1</mat-list-item>
<mat-list-item role="listitem">Item 2</mat-list-item>
<mat-list-item role="listitem">Item 3</mat-list-item>
</mat-list>`;
code = `<mat-list>
<mat-list-item> Pepper </mat-list-item>
<mat-list-item> Salt </mat-list-item>
<mat-list-item> Paprika </mat-list-item>
</mat-list>`;
code1 = `<mat-nav-list>
<a mat-list-item href="..." *ngFor="let link of links"> {{ link }} </a>
</mat-nav-list>`;
code2 = `<mat-nav-list>
<mat-list-item *ngFor="let link of links">
   <a matLine href="...">{{ link }}</a>
   <button mat-icon-button (click)="showInfo(link)">
      <mat-icon>info</mat-icon>
   </button>
</mat-list-item>
</mat-nav-list>`;
code3= `<mat-action-list>
<button mat-list-item (click)="save()"> Save </button>
<button mat-list-item (click)="undo()"> Undo </button>
</mat-action-list>`;
api = `import {MatListModule} from '@angular/material/list';`;
  constructor() { }

  ngOnInit() {
  }

}
