import { TestBed } from '@angular/core/testing';

import { MehdiserviceService } from './mehdiservice.service';

describe('MehdiserviceService', () => {
  let service: MehdiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MehdiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
