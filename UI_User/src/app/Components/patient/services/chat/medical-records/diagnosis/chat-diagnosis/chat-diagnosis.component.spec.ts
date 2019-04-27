import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDiagnosisComponent } from './chat-diagnosis.component';

describe('ChatDiagnosisComponent', () => {
  let component: ChatDiagnosisComponent;
  let fixture: ComponentFixture<ChatDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
