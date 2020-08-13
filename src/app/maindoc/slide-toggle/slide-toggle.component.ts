import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {
 codeex = `<mat-slide-toggle>Slide me!</mat-slide-toggle>`;
 api = `import {MatSlideToggleModule} from '@angular/material/slide-toggle';`;
  constructor() { }

  ngOnInit() {
  }

}
