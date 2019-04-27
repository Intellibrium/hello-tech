import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskexpertRecordFormComponent } from './askexpert-record-form.component';

describe('AskexpertRecordFormComponent', () => {
  let component: AskexpertRecordFormComponent;
  let fixture: ComponentFixture<AskexpertRecordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskexpertRecordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskexpertRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
