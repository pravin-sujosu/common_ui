import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  code = `providers: [
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ]`;
code1 = `providers: [
  {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
]`;
code2 = `<mat-card>
<mat-card-content>
  <h2 class="example-h2">Checkbox configuration</h2>

  <section class="example-section">
    <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
    <mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
  </section>

  <section class="example-section">
    <label class="example-margin">Align:</label>
    <mat-radio-group [(ngModel)]="labelPosition">
      <mat-radio-button class="example-margin" value="after">After</mat-radio-button>
      <mat-radio-button class="example-margin" value="before">Before</mat-radio-button>
    </mat-radio-group>
  </section>

  <section class="example-section">
    <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
  </section>
</mat-card-content>
</mat-card>

<mat-card class="result">
<mat-card-content>
  <h2 class="example-h2">Result</h2>

  <section class="example-section">
    <mat-checkbox
        class="example-margin"
        [(ngModel)]="checked"
        [(indeterminate)]="indeterminate"
        [labelPosition]="labelPosition"
        [disabled]="disabled">
      I'm a checkbox
    </mat-checkbox>
  </section>
</mat-card-content>
</mat-card> `;
code4=`import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

@Component({
  selector: 'hobbit-sheet',
  template: 'passed in {{ data.names }}',
})
export class HobbitSheet {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }
}`;
api = `import {MatCheckboxModule} from '@angular/material/checkbox';`;
  constructor() { }

  ngOnInit() {
  }

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }
}
