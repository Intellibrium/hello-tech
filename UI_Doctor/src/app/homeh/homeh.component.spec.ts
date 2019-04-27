import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomehComponent } from './homeh.component';

describe('HomehComponent', () => {
  let component: HomehComponent;
  let fixture: ComponentFixture<HomehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
