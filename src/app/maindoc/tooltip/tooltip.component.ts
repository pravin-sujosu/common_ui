import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent1 implements OnInit {
  codeex = `<button mat-raised-button
  matTooltip="Info about the action"
  aria-label="Button that displays a tooltip when focused or hovered over">
Action
</button>`;
  constructor() { }

  ngOnInit() {
  }

}
