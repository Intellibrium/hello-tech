import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventivemeasureComponent } from './preventivemeasure.component';

describe('PreventivemeasureComponent', () => {
  let component: PreventivemeasureComponent;
  let fixture: ComponentFixture<PreventivemeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventivemeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventivemeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
