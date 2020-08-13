import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripples',
  templateUrl: './ripples.component.html',
  styleUrls: ['./ripples.component.scss']
})
export class RipplesComponent implements OnInit {
code = ` <div matRipple [matRippleColor]="myColor">
<ng-content></ng-content>
</div>`;
code2 = `<div>
<div matRipple [matRippleTrigger]="trigger" class="my-ripple-container">
  <!-- This is the ripple container, but not the trigger element for ripples. -->
</div>

<div #trigger></div>
</div>`;  
code3= `class MyComponent {

  /** Reference to the directive instance of the ripple. */
  @ViewChild(MatRipple) ripple: MatRipple;

  /** Shows a centered and persistent ripple. */
  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true
    });

    // Fade out the ripple later.
    rippleRef.fadeOut();
  }
}`;
code4 = `const rippleRef = this.ripple.launch(10, 10, {persistent: true});`;
code5= `const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 300,
    exitDuration: 0
  }
};

@NgModule({
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  ]
})`;
api =`import {MatRippleModule} from '@angular/material/core';`;
  constructor() { }

  ngOnInit() {
  }

}
