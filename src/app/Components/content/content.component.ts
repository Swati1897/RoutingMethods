import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  queryParams: any = {};

  constructor( private currentRouter:ActivatedRoute ) { }

ngOnInit(): void {

     this.currentRouter.queryParams.subscribe(data => {
        console.log('++++++++++++++++', data);
        // this.username = data['usrNm'];
        // this.surname = data['surNm'];
        this.queryParams =data;
      });
  }

}
