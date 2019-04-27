import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpartydashboardComponent } from './thirdpartydashboard.component';

describe('ThirdpartydashboardComponent', () => {
  let component: ThirdpartydashboardComponent;
  let fixture: ComponentFixture<ThirdpartydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdpartydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdpartydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
