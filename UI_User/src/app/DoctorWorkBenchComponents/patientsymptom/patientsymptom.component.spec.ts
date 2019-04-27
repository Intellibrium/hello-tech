import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsymptomComponent } from './patientsymptom.component';

describe('PatientsymptomComponent', () => {
  let component: PatientsymptomComponent;
  let fixture: ComponentFixture<PatientsymptomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsymptomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsymptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
