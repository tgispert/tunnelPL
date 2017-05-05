import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PricingDataService } from './pricing-data.service';
import { PricingSearchService } from './pricing-search.service';
import { PricingListComponent } from './pricing-list/pricing-list.component';
import { PricingSearchComponent } from './pricing-search/pricing-search.component';
import { PricingSearchPipe } from './pricing-search-pipe.pipe';
import { PricingBrandsComponent } from './pricing-brands/pricing-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PricingListComponent,
    PricingSearchComponent,
    PricingSearchPipe,
    PricingBrandsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PricingDataService,PricingSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
