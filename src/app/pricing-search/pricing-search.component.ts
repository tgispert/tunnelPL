import { Component, OnInit } from '@angular/core';
import { PricingSearchService } from '../pricing-search.service';

@Component({
  selector: 'pricing-search',
  templateUrl: './pricing-search.component.html',
  styleUrls: ['./pricing-search.component.css']
})
export class PricingSearchComponent implements OnInit {
  
  filter:string;

  constructor(private searchService:PricingSearchService) { }

  ngOnInit() {
  }

  toSearch(value) {
    this.filter = value;
    this.searchService.addToSearch(this.filter);
  }

}
