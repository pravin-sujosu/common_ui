import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  code = `<button mat-raised-button color="primary"
  matBadge="8" matBadgePosition="before" matBadgeColor="accent">
Action
</button>`;
code1 = `<span matBadge="4" matBadgeOverlap="false">Text with a badge</span>`;
code2 = `<span matBadge="1" matBadgeSize="large">Text with large badge</span>`;
code3 = `<button mat-raised-button matBadge="7" [matBadgeHidden]="hidden" (click)="toggleBadgeVisibility()">
Hide
</button>`;
api = `import {MatBadgeModule} from '@angular/material/badge';`;
  constructor() { }

  ngOnInit() {
  }

}
