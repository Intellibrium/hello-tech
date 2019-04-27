import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocchatComponent } from './docchat.component';

describe('DocchatComponent', () => {
  let component: DocchatComponent;
  let fixture: ComponentFixture<DocchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
