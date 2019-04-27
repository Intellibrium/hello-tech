import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskexpertTreatmentComponent } from './askexpert-treatment.component';

describe('AskexpertTreatmentComponent', () => {
  let component: AskexpertTreatmentComponent;
  let fixture: ComponentFixture<AskexpertTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskexpertTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskexpertTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
