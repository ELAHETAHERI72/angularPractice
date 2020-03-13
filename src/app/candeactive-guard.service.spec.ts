import { TestBed } from '@angular/core/testing';

import { CandeactiveGuardService } from './candeactive-guard.service';

describe('CandeactiveGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandeactiveGuardService = TestBed.get(CandeactiveGuardService);
    expect(service).toBeTruthy();
  });
});
