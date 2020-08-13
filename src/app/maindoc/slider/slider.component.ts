import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
codeex = `<mat-slider></mat-slider>`;
code = `<mat-slider min="1" max="5" step="0.5" value="1.5"></mat-slider>`;
code1 = `<mat-slider vertical></mat-slider>`;
code2 = `<mat-slider invert></mat-slider>`;
code3 = `<mat-slider thumbLabel tickInterval="1"></mat-slider>`;
  constructor() { }

  ngOnInit() {
  }

}
