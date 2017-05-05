import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../data/product';

@Pipe({
  name: 'pricingSearchName'
})
export class PricingSearchNamePipe implements PipeTransform {

  transform(items: any, args?: string): any {
    let filter = args.toLocaleLowerCase();
    return filter ? items.filter(item => item.name.toLocaleLowerCase().indexOf(filter) !== -1) : items;
  }

}
