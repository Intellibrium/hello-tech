import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionRcordsFormComponent } from './opinion-rcords-form.component';

describe('OpinionRcordsFormComponent', () => {
  let component: OpinionRcordsFormComponent;
  let fixture: ComponentFixture<OpinionRcordsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionRcordsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionRcordsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
