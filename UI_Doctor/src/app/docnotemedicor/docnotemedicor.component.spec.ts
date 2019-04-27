import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocnotemedicorComponent } from './docnotemedicor.component';

describe('DocnotemedicorComponent', () => {
  let component: DocnotemedicorComponent;
  let fixture: ComponentFixture<DocnotemedicorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocnotemedicorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocnotemedicorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
