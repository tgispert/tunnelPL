import { Component, OnInit } from '@angular/core';
import { PricingDataService } from '../pricing-data.service';

@Component({
  selector: 'pricing-brands',
  templateUrl: './pricing-brands.component.html',
  styleUrls: ['./pricing-brands.component.css']
})
export class PricingBrandsComponent implements OnInit {

  brands;
  categorias;

  constructor(private pricingDataService:PricingDataService) {}

  ngOnInit() {    
    this.brands = this.pricingDataService.getBrands();
    this.categorias = this.pricingDataService.getCategories();
  }

}
