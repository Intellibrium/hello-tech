import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalPlannerComponent } from './medical-planner.component';

describe('MedicalPlannerComponent', () => {
  let component: MedicalPlannerComponent;
  let fixture: ComponentFixture<MedicalPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
