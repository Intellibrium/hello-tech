import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerYourselfComponent } from './emer-yourself.component';

describe('EmerYourselfComponent', () => {
  let component: EmerYourselfComponent;
  let fixture: ComponentFixture<EmerYourselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmerYourselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmerYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
