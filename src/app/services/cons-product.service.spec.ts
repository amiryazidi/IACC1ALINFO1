import { TestBed } from '@angular/core/testing';

import { ConsProductService } from './cons-product.service';

describe('ConsProductService', () => {
  let service: ConsProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
