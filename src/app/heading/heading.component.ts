import { Component, OnInit } from '@angular/core';
import { NewsapiserviseService } from '../servise/newsapiservise.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  topheadingDisplay: any;

  constructor(private _service:NewsapiserviseService) { }

  //displaydata
  // topheadingDisplay:any=[];

  ngOnInit(): void {
  
    this._service.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay=result.articles;
    })

  

  }

}
