import { TestBed } from '@angular/core/testing';

import { CuidarService } from './cuidar.service';

describe('CuidarService', () => {
  let service: CuidarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuidarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
