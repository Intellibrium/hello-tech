import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessregComponent } from './businessreg.component';

describe('BusinessregComponent', () => {
  let component: BusinessregComponent;
  let fixture: ComponentFixture<BusinessregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
