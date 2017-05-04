import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PricingListComponent } from './pricing-list/pricing-list.component';
import { PricingSearchComponent } from './pricing-search/pricing-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PricingListComponent,
    PricingSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
