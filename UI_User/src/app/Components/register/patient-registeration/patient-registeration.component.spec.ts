import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientRegisterationComponent } from './patient-registeration.component';

describe('PatientRegisterationComponent', () => {
  let component: PatientRegisterationComponent;
  let fixture: ComponentFixture<PatientRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
