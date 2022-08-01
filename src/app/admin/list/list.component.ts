import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products: any = [];
  //  productId: any =[];

  constructor(
    private commonSer: CommonService,
    private router: Router,
    private currentRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.commonSer.fetchProducts().subscribe((data: any) => {
      console.log('product list', data);
      this.products = data['Result']; // result hame API se liya hai , sare data wahape store hai.
      // this.products = data.products;
    });
  }

  onUpdate(productId: string) {
    console.log('productId', productId);
    this.router.navigate(['update', 'data'], {
      relativeTo: this.currentRouter,
    });
  }

  onDelete(productId: string) {
    console.log('productId', productId);
    this.router.navigate(['delete', 'id'], { relativeTo: this.currentRouter });
  }
}
