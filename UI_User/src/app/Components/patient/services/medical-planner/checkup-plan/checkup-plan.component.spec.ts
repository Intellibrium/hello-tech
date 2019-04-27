import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckupPlanComponent } from './checkup-plan.component';

describe('CheckupPlanComponent', () => {
  let component: CheckupPlanComponent;
  let fixture: ComponentFixture<CheckupPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckupPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckupPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
