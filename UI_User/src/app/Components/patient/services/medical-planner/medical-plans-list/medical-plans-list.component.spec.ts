import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalPlansListComponent } from './medical-plans-list.component';

describe('MedicalPlansListComponent', () => {
  let component: MedicalPlansListComponent;
  let fixture: ComponentFixture<MedicalPlansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalPlansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalPlansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
