import { TestBed } from '@angular/core/testing';

import { CrudPutService } from './crud-put.service';

describe('CrudPutService', () => {
  let service: CrudPutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudPutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
