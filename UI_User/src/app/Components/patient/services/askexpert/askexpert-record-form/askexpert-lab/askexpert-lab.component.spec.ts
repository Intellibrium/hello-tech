import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskexpertLabComponent } from './askexpert-lab.component';

describe('AskexpertLabComponent', () => {
  let component: AskexpertLabComponent;
  let fixture: ComponentFixture<AskexpertLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskexpertLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskexpertLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
