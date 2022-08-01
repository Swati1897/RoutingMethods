import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(  ) { }

  ngOnInit(): void {
  }

  // onTabClick(routerName:string){
  //   this.router.navigate([routerName], {relativeTo: this.currentRouter });
  // } 
}
