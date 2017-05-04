import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './pricing-list/product';

@Pipe({
  name: 'pricingSearch'
})
export class PricingSearchPipePipe implements PipeTransform {

  transform(items: any, args?: string): any {
    let filter = args.toLocaleLowerCase();
    return filter ? items.filter(item => item.name.toLocaleLowerCase().indexOf(filter) !== -1) : items;
  }

}
