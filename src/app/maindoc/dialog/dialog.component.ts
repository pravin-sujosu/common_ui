import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  animal: string;
  name: string;
  code = `let dialogRef = dialog.open(UserProfileComponent, {
    height: '400px',
    width: '600px',
  });`;

  code1 = `dialogRef.afterClosed().subscribe(result => {
    console.log(Dialog result: result); // Pizza!
  });
  
  dialogRef.close('Pizza!');`;

  code2 = `@Component({/* ... */})
  export class YourDialog {
    constructor(public dialogRef: MatDialogRef<YourDialog>) { }
  
    closeDialog() {
      this.dialogRef.close('Pizza!');
    }
  }`;
  api =`import {MatDialogModule} from '@angular/material/dialog';`;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}