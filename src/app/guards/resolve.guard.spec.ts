import { TestBed } from '@angular/core/testing';

import { ProductsGuard, CategoriesGuard } from './resolve.guard';

describe('ResolveGuard', () => {
  let guard: ProductsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

describe('CategoriesGuard', () => {
  let guard: CategoriesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CategoriesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
