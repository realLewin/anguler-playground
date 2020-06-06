import { TestBed } from '@angular/core/testing';

import { CrudDeleteService } from './crud-delete.service';

describe('CrudDeleteService', () => {
  let service: CrudDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
