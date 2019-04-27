import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskexpertQueryComponent } from './askexpert-query.component';

describe('AskexpertQueryComponent', () => {
  let component: AskexpertQueryComponent;
  let fixture: ComponentFixture<AskexpertQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskexpertQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskexpertQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
