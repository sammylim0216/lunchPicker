import { TestBed } from '@angular/core/testing';

import { LunchGroupService } from './lunch-group.service';

describe('LunchGroupService', () => {
  let service: LunchGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunchGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
