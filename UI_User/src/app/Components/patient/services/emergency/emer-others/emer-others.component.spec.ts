import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerOthersComponent } from './emer-others.component';

describe('EmerOthersComponent', () => {
  let component: EmerOthersComponent;
  let fixture: ComponentFixture<EmerOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmerOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmerOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
