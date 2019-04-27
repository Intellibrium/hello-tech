import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdiagnosisComponent } from './sdiagnosis.component';

describe('SdiagnosisComponent', () => {
  let component: SdiagnosisComponent;
  let fixture: ComponentFixture<SdiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
