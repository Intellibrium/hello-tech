import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolabComponent } from './solab.component';

describe('SolabComponent', () => {
  let component: SolabComponent;
  let fixture: ComponentFixture<SolabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
