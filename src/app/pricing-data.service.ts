import { Injectable } from '@angular/core';
import { Products } from './pricing-list/mocks';

@Injectable()
export class PricingDataService {

  constructor() { }

  getProducts(){
    return Products;
  }

}
