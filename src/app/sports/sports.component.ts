import { Component, OnInit } from '@angular/core';
import { NewsapiserviseService } from '../servise/newsapiservise.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _service:NewsapiserviseService) { }
  sportsnewsDisplay:any=[];
  ngOnInit(): void {
    this._service.sportsNews().subscribe((result)=>{
      this.sportsnewsDisplay=result.articles;
    });
  }

}
