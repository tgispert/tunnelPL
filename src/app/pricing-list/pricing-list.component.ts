import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product';
import { PricingDataService } from '../pricing-data.service';
import { PricingSearchService } from '../pricing-search.service';

@Component({
  selector: 'pricing-list',
  templateUrl: './pricing-list.component.html',
  styleUrls: ['./pricing-list.component.css']
})
export class PricingListComponent implements OnInit {

  productos : Product[];
  filter : string;

  constructor(private pricingDataService:PricingDataService, private searchService:PricingSearchService) {}

  ngOnInit() {
    this.productos = this.pricingDataService.getProducts();
    this.searchService.word.subscribe(word => this.filter=word);
  }

}
