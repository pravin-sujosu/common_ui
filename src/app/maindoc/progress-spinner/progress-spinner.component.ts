import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
code = `<mat-spinner></mat-spinner>`;
api = `import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';`;
  constructor() { }

  ngOnInit() {
  }

}
