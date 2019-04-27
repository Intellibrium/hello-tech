import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorobservationComponent } from './doctorobservation.component';

describe('DoctorobservationComponent', () => {
  let component: DoctorobservationComponent;
  let fixture: ComponentFixture<DoctorobservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorobservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorobservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
