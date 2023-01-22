import { Component, OnInit } from '@angular/core';
import { NewsapiserviseService } from '../servise/newsapiservise.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private _service:NewsapiserviseService) { }
businessnewsDisplay:any=[];
  ngOnInit(): void {
    this._service.businessNews().subscribe((result)=>{
      this.businessnewsDisplay=result.articles;

    })
  }

}
