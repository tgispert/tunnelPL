import { Injectable } from '@angular/core';
import { Products } from './data/products';
import { Brands } from './data/brands';
import { Product } from './data/product';

@Injectable()
export class PricingDataService {

  constructor() {}

  getProducts(brand){
    let result : Product[];
    result = new Array<Product>();
    Products.forEach(element => {
      if((brand=='')||(element.brand==brand)){
        element.products.forEach(element => {
          result.push(element);
        });
      }
    });
    return result;
  }

  getBrands(){
    return Brands;
  }

}