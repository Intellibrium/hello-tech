import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelayoutComponent } from './homelayout.component';

describe('HomelayoutComponent', () => {
  let component: HomelayoutComponent;
  let fixture: ComponentFixture<HomelayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
