import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../data/product';

@Pipe({
  name: 'pricingSearchName'
})
export class PricingSearchNamePipe implements PipeTransform {

  transform(items: any, arg1: string): any {
    let filter = arg1.toLocaleLowerCase();
    return filter ? items.filter(item => ((item.name.toLocaleLowerCase().indexOf(filter) !== -1) || (item.code.toLocaleLowerCase().indexOf(filter) !== -1) || (item.class.toLocaleLowerCase().indexOf(filter) !== -1))) : items;
  }

}
