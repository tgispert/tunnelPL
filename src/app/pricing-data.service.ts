import { Injectable } from '@angular/core';
import { Products } from './data/products';
import { Brands } from './data/brands';
import { Categories } from './data/categories';

@Injectable()
export class PricingDataService {

  constructor() { }

  getProducts(){
    return Products;
  }

  getBrands(){
    return Brands;
  }

  getCategories(){
    return Categories
  }

}
