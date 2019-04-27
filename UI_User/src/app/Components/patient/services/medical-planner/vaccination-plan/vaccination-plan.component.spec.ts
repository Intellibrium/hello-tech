import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationPlanComponent } from './vaccination-plan.component';

describe('VaccinationPlanComponent', () => {
  let component: VaccinationPlanComponent;
  let fixture: ComponentFixture<VaccinationPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
