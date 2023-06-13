import { TestBed } from '@angular/core/testing';

import { DenuadminserviceService } from './denuadminservice.service';

describe('DenuadminserviceService', () => {
  let service: DenuadminserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DenuadminserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
