import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuehistoryComponent } from './queuehistory.component';

describe('QueuehistoryComponent', () => {
  let component: QueuehistoryComponent;
  let fixture: ComponentFixture<QueuehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
