import { TestBed, inject } from '@angular/core/testing';

import { PricingSearchService } from './pricing-search.service';

describe('PricingSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricingSearchService]
    });
  });

  it('should ...', inject([PricingSearchService], (service: PricingSearchService) => {
    expect(service).toBeTruthy();
  }));
});
