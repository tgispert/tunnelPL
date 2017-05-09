import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricingSearchBrand'
})
export class PricingSearchBrandPipe implements PipeTransform {

  transform(items: any, arg1: string): any {
    let filter = arg1.toLocaleLowerCase();
    return filter ? items.filter(item => (item.brand.toLocaleLowerCase().indexOf(filter) !== -1)) : items;
  }

}
