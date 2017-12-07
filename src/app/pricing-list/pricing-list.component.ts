import { Component, OnInit } from '@angular/core';
import { PricingList } from '../data/pricing-list';
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
  brands;
  selectedBrand : string;
  isSelected: boolean;

  constructor(private pricingDataService:PricingDataService, private searchService:PricingSearchService) {}

  ngOnInit() {
    this.productos = this.pricingDataService.getProducts('');
    this.searchService.word.subscribe(word => this.filter=word);this.selectedBrand = "";
    this.brands = this.pricingDataService.getBrands();
  }

  select(value){
    this.isSelected = true;
    this.selectedBrand = value;
    this.productos = this.pricingDataService.getProducts(this.selectedBrand);
    window.scrollTo(0,0);
  }

  exit(){
    this.isSelected = false;
    this.selectedBrand = "";
    this.filter = "";
    this.productos = this.pricingDataService.getProducts('');
  }

  toSearch(value) {
    this.filter = value;
    this.searchService.addToSearch(this.filter);
  }

}
