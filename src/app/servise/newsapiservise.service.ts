import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiserviseService {

  constructor(private _http:HttpClient) { }
//newsapiurl
newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=bf3cfc75cd73422893f1668485fc6aa8"
//technews
techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=bf3cfc75cd73422893f1668485fc6aa8"

businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bf3cfc75cd73422893f1668485fc6aa8"
//topheadline
sportsApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bf3cfc75cd73422893f1668485fc6aa8"

entertinmentApiUrl="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bf3cfc75cd73422893f1668485fc6aa8"
topHeading():Observable<any>
{
  return this._http.get(this.newsApiUrl);
}

techNews():Observable<any>
{
  return this._http.get(this.techApiUrl)
}
businessNews():Observable<any>
{
  return this._http.get(this.businessApiUrl)
}
sportsNews():Observable<any>
{
  return this._http.get(this.sportsApiUrl)
}
entertinment():Observable<any>
{
  return this._http.get(this.entertinmentApiUrl)
}

}
