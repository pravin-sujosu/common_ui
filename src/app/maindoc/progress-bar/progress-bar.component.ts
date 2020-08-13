import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
code = `<mat-progress-bar mode="determinate" value="40"></mat-progress-bar>`;
code1 = `<mat-progress-bar mode="indeterminate"></mat-progress-bar>`;
code2 = `<mat-progress-bar mode="buffer"></mat-progress-bar>`;
api =`import {MatProgressBarModule} from '@angular/material/progress-bar';`;
  constructor() { }

  ngOnInit() {
  }

}
