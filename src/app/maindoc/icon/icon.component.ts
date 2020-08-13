import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  codeex = `<mat-icon aria-hidden="false" aria-label="Example home icon">home</mat-icon>`;
  constructor() { }

  ngOnInit() {
  }

}
