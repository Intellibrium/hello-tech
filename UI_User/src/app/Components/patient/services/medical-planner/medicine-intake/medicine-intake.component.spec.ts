import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineIntakeComponent } from './medicine-intake.component';

describe('MedicineIntakeComponent', () => {
  let component: MedicineIntakeComponent;
  let fixture: ComponentFixture<MedicineIntakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineIntakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
