import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  // 1) 1.1) image as convert to (photo example)
  photoSrc :any= [];
  imageSrc: any = [];

  productResult: any = [];
  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private commonSer: CommonService,
    private router: Router,
    private currentRouter: ActivatedRoute
  ) {
    // initialzing the form
    this.productForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.minLength(3),
          Validators.required,
          Validators.maxLength(20),
        ],
      ],
      description: [
        '',
        [
          Validators.minLength(5),
          Validators.required,
          Validators.maxLength(200),
        ],
      ],
      price: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // 1) 1.2)
 //   onFileChange(event:any) {
  //    console.log('event', event)
  //    const reader = new FileReader();

  //    if(event.target.files && event.target.files.length){
  //      const [file] = event.target.files ;
  //      reader.readAsDataURL (file);

  //      reader.onload = () => {
  //        this.imageSrc = reader.result as string ;
  //      }
  //     }
  //  }

  // 1) 1.2) 
  //  onFileChange(event:any) {
  //    console.log('event', event)
  //    const reader = new FileReader();

  //    if(event.target.files && event.target.files.length){
  //      const [file] = event.target.files ;
  //      reader.readAsDataURL (file);

  //      reader.onload = () => {
  //        this.photoSrc = reader.result as string ;
  //      }
  //     }
  //  }

  onFormSubmit() {
    console.log('Form', this.productForm.value);
    const body = {
      title: this.productForm.value.title,
      description: this.productForm.value.description,
      price: this.productForm.value.price,
      category: this.productForm.value.category,
      image: this.productForm.value.image,
    };

    this.commonSer.addProducts(body).subscribe(
      (productResult: any) => {
        console.log('productResult', productResult);
        this.showMessage();
        this.router.navigate(['./../list'], { relativeTo: this.currentRouter });
      },
      (error) => {
        console.log('Error !', error);
      }
    );
  }

  showMessage(): void {
    alert('product added success...!');
  }
}
