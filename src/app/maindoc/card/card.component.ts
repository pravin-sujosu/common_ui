import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  code = `const bottomSheetRef = bottomSheet.open(SocialShareComponent, {
    ariaLabel: 'Share on social media'
  });`;
code1 = `bottomSheetRef.afterDismissed().subscribe(() => {
  console.log('Bottom sheet has been dismissed.');
});

bottomSheetRef.dismiss();`;
code2 = `const bottomSheetRef = bottomSheet.open(HobbitSheet, {
  data: { names: ['Frodo', 'Bilbo'] },
});`;
code4=`import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

@Component({
  selector: 'hobbit-sheet',
  template: 'passed in {{ data.names }}',
})
export class HobbitSheet {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }
}`;
api = `import {MatCardModule} from '@angular/material/card';`;
  constructor() { }

  ngOnInit() {
  }

}
