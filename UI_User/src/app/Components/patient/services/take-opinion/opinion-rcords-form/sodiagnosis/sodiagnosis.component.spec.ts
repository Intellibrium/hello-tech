import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodiagnosisComponent } from './sodiagnosis.component';

describe('SodiagnosisComponent', () => {
  let component: SodiagnosisComponent;
  let fixture: ComponentFixture<SodiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
