import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  codeex=`<form class="example-form">
  <mat-form-field class="example-full-width">
    <mat-label>Favorite food</mat-label>
    <input matInput placeholder="Ex. Pizza" value="Sushi">
  </mat-form-field>

  <mat-form-field class="example-full-width">
    <mat-label>Leave a comment</mat-label>
    <textarea matInput placeholder="Ex. It makes me feel..."></textarea>
  </mat-form-field>
</form>`;
  constructor() { }

  ngOnInit() {
  }

}
