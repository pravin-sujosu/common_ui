import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  
codeex = `<mat-paginator [length]="100"
[pageSize]="10"
[pageSizeOptions]="[5, 10, 25, 100]">
</mat-paginator>`;
api = `import {MatPaginatorModule} from '@angular/material/paginator';`;
tbl1code = 'getRangeLabel: (page: number, pageSize: number, length: number) =&gt; { \
  if (length == 0 || pageSize == 0) {\
      return `0 of ${length}`;\
  }\
  length = Math.max(length, 0);\
  const startIndex = page * pageSize;\
  const endIndex = startIndex &lt; length ?\
      Math.min(startIndex + pageSize, length) :\
      startIndex + pageSize;\
  return `${startIndex + 1} – ${endIndex} of ${length}`;\
}';
  constructor() { }

  ngOnInit() {
    
  }


}
