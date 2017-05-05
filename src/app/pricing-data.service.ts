import { Injectable } from '@angular/core';
import { Products } from './data/products';

@Injectable()
export class PricingDataService {

  constructor() { }

  getProducts(){
    return Products;
  }

}
