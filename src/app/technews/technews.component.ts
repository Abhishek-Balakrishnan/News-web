import { Component, OnInit } from '@angular/core';
import { NewsapiserviseService } from '../servise/newsapiservise.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _service:NewsapiserviseService) { }
  technewsDisplay:any=[];

  ngOnInit(): void {
    this._service.techNews().subscribe((result)=>{
      this.technewsDisplay=result.articles;
    });
  }

}
