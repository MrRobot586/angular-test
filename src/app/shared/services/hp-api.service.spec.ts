import { TestBed } from '@angular/core/testing';

import { HpApiService } from './hp-api.service';

describe('HpApiService', () => {
  let service: HpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
