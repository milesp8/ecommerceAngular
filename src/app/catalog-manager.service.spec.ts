import { TestBed } from '@angular/core/testing';

import { CatalogManagerService } from './catalog-manager.service';

describe('CatalogManagerService', () => {
  let service: CatalogManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
