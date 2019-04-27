import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedAdvisorylistComponent } from './med-advisorylist.component';

describe('MedAdvisorylistComponent', () => {
  let component: MedAdvisorylistComponent;
  let fixture: ComponentFixture<MedAdvisorylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedAdvisorylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedAdvisorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
