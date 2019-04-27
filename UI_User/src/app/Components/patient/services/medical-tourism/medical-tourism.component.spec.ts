import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTourismComponent } from './medical-tourism.component';

describe('MedicalTourismComponent', () => {
  let component: MedicalTourismComponent;
  let fixture: ComponentFixture<MedicalTourismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalTourismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
