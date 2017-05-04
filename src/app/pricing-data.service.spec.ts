import { TestBed, inject } from '@angular/core/testing';

import { PricingDataService } from './pricing-data.service';

describe('PricingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricingDataService]
    });
  });

  it('should ...', inject([PricingDataService], (service: PricingDataService) => {
    expect(service).toBeTruthy();
  }));
});
