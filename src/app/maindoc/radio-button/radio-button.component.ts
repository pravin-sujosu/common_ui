import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
code = `<mat-radio-group aria-label="Select an option">
<mat-radio-button value="1">Option 1</mat-radio-button>
<mat-radio-button value="2">Option 2</mat-radio-button>
</mat-radio-group>`;
api = `import {MatRadioModule} from '@angular/material/radio';`;
  constructor() { }

  ngOnInit() {
  }

}
