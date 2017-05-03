import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Products } from './mocks';

@Component({
  selector: 'pricing-list',
  templateUrl: './pricing-list.component.html',
  styleUrls: ['./pricing-list.component.css']
})
export class PricingListComponent implements OnInit {

  productos : Product[];

  constructor() {}

  ngOnInit() {
    this.productos = Products;
    return this.productos;
  }

}
