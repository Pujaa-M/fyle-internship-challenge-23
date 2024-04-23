import { TestBed } from '@angular/core/testing';

import { CacheInterceptor } from './cache-interceptor.service';

describe('CacheInterceptor', () => {
  let service: CacheInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
