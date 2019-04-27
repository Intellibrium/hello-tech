import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoDontslistComponent } from './do-dontslist.component';

describe('DoDontslistComponent', () => {
  let component: DoDontslistComponent;
  let fixture: ComponentFixture<DoDontslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoDontslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoDontslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
