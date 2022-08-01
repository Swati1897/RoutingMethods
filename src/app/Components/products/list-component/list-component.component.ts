// import { CommonService } from './../../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
   products : any= [];

  constructor( private CommonSer : CommonService) { }

  ngOnInit(): void {

    this.CommonSer.fetchProducts().subscribe(data => {
      console.log('product list', data);
      this.products = data;
    });
  }

}
