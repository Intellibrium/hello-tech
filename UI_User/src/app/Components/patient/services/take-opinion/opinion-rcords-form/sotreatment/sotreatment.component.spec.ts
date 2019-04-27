import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SotreatmentComponent } from './sotreatment.component';

describe('SotreatmentComponent', () => {
  let component: SotreatmentComponent;
  let fixture: ComponentFixture<SotreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SotreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SotreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
