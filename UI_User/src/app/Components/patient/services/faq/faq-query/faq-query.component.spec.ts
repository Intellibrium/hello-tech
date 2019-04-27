import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqQueryComponent } from './faq-query.component';

describe('FaqQueryComponent', () => {
  let component: FaqQueryComponent;
  let fixture: ComponentFixture<FaqQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
