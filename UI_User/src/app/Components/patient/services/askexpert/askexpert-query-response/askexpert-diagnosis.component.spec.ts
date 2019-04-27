import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskexpertQueryResponse } from './askexpert-diagnosis.component';

describe('AskexpertDiagnosisComponent', () => {
  let component: AskexpertQueryResponse;
  let fixture: ComponentFixture<AskexpertQueryResponse>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskexpertQueryResponse ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskexpertQueryResponse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
