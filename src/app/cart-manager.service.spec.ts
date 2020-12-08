import { TestBed } from '@angular/core/testing';

import { CartManagerService } from './cart-manager.service';

import { CookieService } from 'ngx-cookie-service';

describe('CartManagerService', () => {
  let service: CartManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
