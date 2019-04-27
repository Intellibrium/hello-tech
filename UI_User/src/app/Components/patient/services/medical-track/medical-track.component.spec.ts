import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTrackComponent } from './medical-track.component';

describe('MedicalTrackComponent', () => {
  let component: MedicalTrackComponent;
  let fixture: ComponentFixture<MedicalTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
