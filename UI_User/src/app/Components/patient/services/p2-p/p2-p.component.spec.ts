import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2PComponent } from './p2-p.component';

describe('P2PComponent', () => {
  let component: P2PComponent;
  let fixture: ComponentFixture<P2PComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2PComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
