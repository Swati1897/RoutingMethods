import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  productId: any = [];

  productDetails: any = {};
  // pathParams: any ={ };
  updateProductForm: FormGroup;
  // update :any ={} ;

  constructor(
    private formBuilder: FormBuilder,
    private commonSer: CommonService,
    private router: Router,
    private currentRouter: ActivatedRoute
  ) {
    // initialzing the form
    this.updateProductForm = this.formBuilder.group({
      title: [
        // this.updateProductForm.value.title,
         '  ',
        [
          Validators.minLength(3),
          Validators.required,
          Validators.maxLength(20),
        ],
      ],
      description: [
        ' ',
        [
          Validators.minLength(5),
          Validators.required,
          Validators.maxLength(200),
        ],
      ],
      price: [' ', Validators.required],
      category: [' ', Validators.required],
      image: [' ', Validators.required],
    });
    console.log(this.productDetails);
  }

  ngOnInit(): void {
    this.currentRouter.params.subscribe((data) => {
      console.log('*******************', data);
      this.productId = data['data']; //id ham API se liye hai
      //  this.getSingleProduct();

      this.commonSer
        .fetchSingleProducts(this.productId)
        .subscribe((productDetails: any) => {
          console.log('productDetails', productDetails);
          this.productDetails = productDetails['data']; //data featch ke liye,vahi data ko vahi data me assign karna hai  a = a ;
          this.setFormValues();
        });
    });
  }

  setFormValues() {
    this.updateProductForm = this.formBuilder.group({
      title: [
        this.productDetails.value.title,
        [
          Validators.minLength(3),
          Validators.required,
          Validators.maxLength(20),
        ],
      ],
      description: [
        this.productDetails.value.description,
        [
          Validators.minLength(5),
          Validators.required,
          Validators.maxLength(200),
        ],
      ],
      price: [
        this.productDetails.value.price,
         Validators.required],
      category: [
        this.productDetails.value.category,
        // this.productDetails.controls['category'].setValue(this.productDetails.value.category), 
        Validators.required],

      image: [
        this.productDetails.value.image,
        // this.productDetails.controls['image'].setValue(this.productDetails.value.image),
        Validators.required],
    });
  }

  onFormSubmit() {
    console.log('Form', this.updateProductForm.value);
    const body = {
      title: this.updateProductForm.value.title,
      description: this.updateProductForm.value.description,
      price: this.updateProductForm.value.price,
      category: this.updateProductForm.value.category,
      image: this.updateProductForm.value.image,
    };
    this.commonSer.putProduct(this.productId, body).subscribe(
      (productDetails: any) => {
        console.log('productDetails', productDetails);
        this.showMessage();
        this.router.navigate(['./../list'], { relativeTo: this.currentRouter });
      },
      (error) => {
        console.log('Error !', error);
      }
    );
  }
  showMessage() {
    alert('product update success...!');
  }
}