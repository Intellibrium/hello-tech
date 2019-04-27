import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskexpertDiagnosisComponent } from './askexpert-diagnosis.component';

describe('AskexpertDiagnosisComponent', () => {
  let component: AskexpertDiagnosisComponent;
  let fixture: ComponentFixture<AskexpertDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskexpertDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskexpertDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
