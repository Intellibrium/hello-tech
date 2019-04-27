import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientuploadsComponent } from './patientuploads.component';

describe('PatientuploadsComponent', () => {
  let component: PatientuploadsComponent;
  let fixture: ComponentFixture<PatientuploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientuploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientuploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
