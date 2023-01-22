import { Component, OnInit } from '@angular/core';
import { NewsapiserviseService } from '../servise/newsapiservise.service';

@Component({
  selector: 'app-entertinment',
  templateUrl: './entertinment.component.html',
  styleUrls: ['./entertinment.component.css']
})
export class EntertinmentComponent implements OnInit {

  constructor(private _service:NewsapiserviseService) { }
entertinmentdisplay:any=[];
  ngOnInit(): void {
    this._service.topHeading().subscribe((result)=>{
      console.log(result);
      this.entertinmentdisplay=result.articles;
    })

  }

}
