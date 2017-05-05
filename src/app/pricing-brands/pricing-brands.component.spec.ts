import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingBrandsComponent } from './pricing-brands.component';

describe('PricingBrandsComponent', () => {
  let component: PricingBrandsComponent;
  let fixture: ComponentFixture<PricingBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
