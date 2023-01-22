import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EntertinmentComponent } from './entertinment/entertinment.component';
import { HeadingComponent } from './heading/heading.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path:'',component:HeadingComponent}, 
  {path:'tech',component:TechnewsComponent},
  {path:'business',component:BusinessNewsComponent},   
  {path:'sports',component:SportsComponent},   
  {path:'entertinment',component:EntertinmentComponent},   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
