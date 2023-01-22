import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsapiserviseService } from './servise/newsapiservise.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SportsComponent } from './sports/sports.component';
import { EntertinmentComponent } from './entertinment/entertinment.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    TechnewsComponent,
    BusinessNewsComponent,
    SportsComponent,
    EntertinmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [NewsapiserviseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
