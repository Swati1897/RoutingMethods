import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( 
    private router: Router,
    private currentRouter:ActivatedRoute
    ) { }
   
  ngOnInit(): void {
  }
          //router URL - localhost:4200/ All
  onTabClick(routerName: string){
    console.log('routerName', routerName);
    this.router.navigate([routerName,'usrNm','surNm','city','country','pincode'], { relativeTo: this.currentRouter});
  }
}
