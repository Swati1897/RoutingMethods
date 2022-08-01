import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string ='default';
  surname: string='default';
  pathParams: any ={};
  queryParams: any ={};
  
  constructor( private currentRouter:ActivatedRoute , private activatedRoute:ActivatedRoute) {  }

 
  //http:localhost:4200/home/user/swati
  ngOnInit(): void {
    this.currentRouter.params.subscribe(data => {
      console.log('------------------', data);
    //  this.username = data['usrNm'];
    //  this.surname = data['surNm'];
      this.pathParams = data;
    });

    this.activatedRoute.queryParams.subscribe(data => {
      console.log('++++++++++++++++', data);
      // this.username = data['usrNm'];
      // this.surname = data['surNm'];
      this.queryParams =data;
      });
    }
}
