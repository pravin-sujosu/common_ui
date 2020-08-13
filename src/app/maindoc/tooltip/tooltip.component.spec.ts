import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipComponent1 } from './tooltip.component';

describe('TooltipComponent', () => {
  let component: TooltipComponent1;
  let fixture: ComponentFixture<TooltipComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
