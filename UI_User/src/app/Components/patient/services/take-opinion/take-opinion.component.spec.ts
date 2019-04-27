import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOpinionComponent } from './take-opinion.component';

describe('TakeOpinionComponent', () => {
  let component: TakeOpinionComponent;
  let fixture: ComponentFixture<TakeOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
