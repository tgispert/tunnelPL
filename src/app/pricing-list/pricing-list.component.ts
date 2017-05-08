import { Component, OnInit } from '@angular/core';
import { PricingList } from '../data/pricing-list';
import { PricingClass } from '../data/pricing-class';
import { PricingDataService } from '../pricing-data.service';
import { PricingSearchService } from '../pricing-search.service';


@Component({
  selector: 'pricing-list',
  templateUrl: './pricing-list.component.html',
  styleUrls: ['./pricing-list.component.css']
})
export class PricingListComponent implements OnInit {

  productos;
  filter : string;
  brand : string;
  lista : PricingList;

  constructor(private pricingDataService:PricingDataService, private searchService:PricingSearchService) {}

  ngOnInit() {
    this.productos = this.pricingDataService.getProducts();
    this.searchService.word.subscribe(word => this.filter=word);
  }

}
