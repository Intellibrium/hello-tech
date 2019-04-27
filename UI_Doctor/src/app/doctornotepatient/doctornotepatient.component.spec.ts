import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctornotepatientComponent } from './doctornotepatient.component';

describe('DoctornotepatientComponent', () => {
  let component: DoctornotepatientComponent;
  let fixture: ComponentFixture<DoctornotepatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctornotepatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctornotepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
