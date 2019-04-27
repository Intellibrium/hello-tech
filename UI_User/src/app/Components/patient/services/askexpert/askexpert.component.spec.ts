import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskexpertComponent } from './askexpert.component';

describe('AskexpertComponent', () => {
  let component: AskexpertComponent;
  let fixture: ComponentFixture<AskexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
