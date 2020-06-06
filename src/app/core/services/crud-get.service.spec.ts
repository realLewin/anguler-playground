import { TestBed } from '@angular/core/testing';

import { CrudGetService } from './crud-get.service';

describe('CrudGetService', () => {
  let service: CrudGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
