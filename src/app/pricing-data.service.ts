import { Injectable } from '@angular/core';
import { Products } from './data/products';
import { Brands } from './data/brands';

@Injectable()
export class PricingDataService {

  constructor() { }

  getProducts(){
    return Products;
  }

  getBrands(){
    return Brands;
  }

}
