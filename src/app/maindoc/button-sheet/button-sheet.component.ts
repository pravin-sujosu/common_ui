import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-button-sheet',
  templateUrl: './button-sheet.component.html',
  styleUrls: ['./button-sheet.component.scss']
})
export class ButtonSheetComponent implements OnInit {
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
api = `import {MatBottomSheetModule} from '@angular/material/bottom-sheet';`;
  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

}
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}