import { TestBed, inject } from '@angular/core/testing';

import { UserRestrationService } from './user-restration.service';

describe('UserRestrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRestrationService]
    });
  });

  it('should be created', inject([UserRestrationService], (service: UserRestrationService) => {
    expect(service).toBeTruthy();
  }));
});
