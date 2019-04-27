import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletePatientProfileComponent } from './complete-patient-profile.component';

describe('CompletePatientProfileComponent', () => {
  let component: CompletePatientProfileComponent;
  let fixture: ComponentFixture<CompletePatientProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletePatientProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletePatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
