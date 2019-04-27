import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAppropriateComponent } from './find-appropriate.component';

describe('FindAppropriateComponent', () => {
  let component: FindAppropriateComponent;
  let fixture: ComponentFixture<FindAppropriateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAppropriateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAppropriateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
