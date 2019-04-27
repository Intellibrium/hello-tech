import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAtHomeComponent } from './service-at-home.component';

describe('ServiceAtHomeComponent', () => {
  let component: ServiceAtHomeComponent;
  let fixture: ComponentFixture<ServiceAtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
