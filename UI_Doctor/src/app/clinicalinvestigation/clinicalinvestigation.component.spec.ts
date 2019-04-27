import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalinvestigationComponent } from './clinicalinvestigation.component';

describe('ClinicalinvestigationComponent', () => {
  let component: ClinicalinvestigationComponent;
  let fixture: ComponentFixture<ClinicalinvestigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalinvestigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalinvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
