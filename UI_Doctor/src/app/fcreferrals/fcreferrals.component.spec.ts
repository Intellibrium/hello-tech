import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcreferralsComponent } from './fcreferrals.component';

describe('FcreferralsComponent', () => {
  let component: FcreferralsComponent;
  let fixture: ComponentFixture<FcreferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcreferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcreferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
