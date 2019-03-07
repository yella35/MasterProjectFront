import { TestBed, inject } from '@angular/core/testing';

import { HttpInterceptorConfigService } from './http-interceptor-config.service';

describe('HttpInterceptorConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpInterceptorConfigService]
    });
  });

  it('should be created', inject([HttpInterceptorConfigService], (service: HttpInterceptorConfigService) => {
    expect(service).toBeTruthy();
  }));
});
