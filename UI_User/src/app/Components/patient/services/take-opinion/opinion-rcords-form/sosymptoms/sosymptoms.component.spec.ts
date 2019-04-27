import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SosymptomsComponent } from './sosymptoms.component';

describe('SosymptomsComponent', () => {
  let component: SosymptomsComponent;
  let fixture: ComponentFixture<SosymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SosymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
