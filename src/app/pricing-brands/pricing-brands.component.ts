import { Component, OnInit } from '@angular/core';
import { PricingDataService } from '../pricing-data.service';
import { PricingSearchService } from '../pricing-search.service';

@Component({
  selector: 'pricing-brands',
  templateUrl: './pricing-brands.component.html',
  styleUrls: ['./pricing-brands.component.css']
})
export class PricingBrandsComponent implements OnInit {

  brands;
  selectedBrand : string;
  isSelected: boolean;
  filter : string;

  constructor(private pricingDataService:PricingDataService, private searchService:PricingSearchService) {}

  ngOnInit() {
    this.selectedBrand = "";
    this.brands = this.pricingDataService.getBrands();
  }

  select(value){
    this.isSelected = true;
    this.selectedBrand = value;
  }

  exit(){
    this.isSelected = false;
    this.selectedBrand = "";
  }

  toSearch(value) {
    this.filter = value;
    this.searchService.addToSearch(this.filter);
  }

}
