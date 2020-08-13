import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
  codeex = ` <mat-form-field>
  <mat-label>Message</mat-label>
  <input matInput value="Disco party!" #message>
</mat-form-field>

<mat-form-field>
  <mat-label>Action</mat-label>
  <input matInput value="Dance" #action>
</mat-form-field>

<button mat-stroked-button (click)="openSnackBar(message.value, action.value)">Show snack-bar</button>`;
code= `// Simple message.
let snackBarRef = snackBar.open('Message archived');

// Simple message with an action.
let snackBarRef = snackBar.open('Message archived', 'Undo');

// Load the given component into the snack-bar.
let snackBarRef = snackbar.openFromComponent(MessageArchivedComponent);`;
code1 = `snackBarRef.afterDismissed().subscribe(() => {
  console.log('The snack-bar was dismissed');
});


snackBarRef.onAction().subscribe(() => {
  console.log('The snack-bar action was triggered!');
});

snackBarRef.dismiss();`;
code3= `snackbar.open('Message archived', 'Undo', {
  duration: 3000
});`;
api = `import {MatSnackBarModule} from '@angular/material/snack-bar';`;
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
