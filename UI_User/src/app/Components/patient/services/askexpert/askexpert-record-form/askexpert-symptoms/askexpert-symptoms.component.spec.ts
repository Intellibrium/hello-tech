import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskexpertSymptomsComponent } from './askexpert-symptoms.component';

describe('AskexpertSymptomsComponent', () => {
  let component: AskexpertSymptomsComponent;
  let fixture: ComponentFixture<AskexpertSymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskexpertSymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskexpertSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
