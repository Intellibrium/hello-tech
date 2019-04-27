import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPriscriptionComponent } from './digital-priscription.component';

describe('DigitalPriscriptionComponent', () => {
  let component: DigitalPriscriptionComponent;
  let fixture: ComponentFixture<DigitalPriscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalPriscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalPriscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
