import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api-service';
import { Products } from 'src/app/shared/models/products.model';
import { ToastrService } from 'ngx-toastr';
import { categoryProduct } from 'src/app/shared/models/categoryProduct.model';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css'],
})
export class AddModalComponent implements OnInit {
  productsModelObj:categoryProduct = new categoryProduct();
  categories: any;
  filterCategories: any;
  @Output() submitEvent = new EventEmitter<boolean>();

  @Input() isEdit: boolean;
  @Input() editData: categoryProduct;
  productsData: any = [];

  constructor(private api: ApiService, private toastr: ToastrService) {}
  previewImage: string = '';

  url = './assets/images/majica1.jpg';

  hasPreviewImage: boolean = false;

  ngOnInit(): void {
    if (this.isEdit) {
      this.profileForm.controls['title'].setValue(this.editData.title);
      this.profileForm.controls['description'].setValue(
        this.editData.description
      );
      this.profileForm.controls['quantity'].setValue(this.editData.quantity);
      this.profileForm.controls['price'].setValue(this.editData.price);
      this.profileForm.controls['category'].setValue(this.editData.category);
      this.profileForm.controls['categoryID'].setValue(this.editData.categoryID);
      this.profileForm.controls['filterCategory'].setValue(this.editData.filterCategory)
      this.hasPreviewImage = true;
      this.previewImage = this.editData.image;
      this.productsModelObj.image = this.editData.image;
      
    }

    this.getCategories();
    this.getFilterCategories();
  }

  
  getCategories(){
    this.api.getCategories().subscribe(res =>{
      this.categories = res;
      console.log('cate', this.categories)
    })

  }

  getFilterCategories(){
    this.api.getFilterCategories().subscribe(res =>{
      this.filterCategories = res;
      console.log('daj filtere', this.filterCategories)
    })
  }

  onSelectFile(e) {
    if (e.target.files) {
      var reader = new FileReader();
      const image = reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.hasPreviewImage = true;
        this.previewImage = event.target.result;
        this.productsModelObj.image = event.target.result;
      };
    }
  }

  profileForm = new FormGroup({
    image: new FormControl(this.productsModelObj.image, Validators.required),
    title: new FormControl(this.productsModelObj.title, [Validators.required]),
    description: new FormControl(
      this.productsModelObj.title,
      Validators.required
    ),
    quantity: new FormControl(
      this.productsModelObj.quantity,
      Validators.required
    ),
    price: new FormControl(this.productsModelObj.price, Validators.required),
    categoryID: new FormControl(this.productsModelObj.categoryID),
    category: new FormControl(this.productsModelObj.category),
    filterCategory: new FormControl(this.productsModelObj.filterCategory),
  });

  postProductsDetails() {
    this.productsModelObj.title = this.profileForm.value.title;
    this.productsModelObj.description = this.profileForm.value.description;
    this.productsModelObj.quantity = this.profileForm.value.quantity;
    this.productsModelObj.price = this.profileForm.value.price;
    this.productsModelObj.categoryID = this.profileForm.value.categoryID;
    this.productsModelObj.category = this.profileForm.value.category;
    this.productsModelObj.filterCategory = this.profileForm.value.filterCategory;
    console.log(this.productsModelObj);

    if (this.isEdit) {
      this.api
        .updateProducts(this.productsModelObj, this.editData.id)
        .subscribe((res) => {
          this.toastr.success('Your product is successfully updated!');
        });
      this.getAllProducts();
      this.submitEvent.emit();

      return;
    }

    this.api.postcategoryProducts(this.productsModelObj).subscribe((res) => {
      this.toastr.success('Your product is successfully added');
      this.submitEvent.emit();
      this.profileForm.reset();
    });
  }

  getAllProducts() {
    this.api.getProducts().subscribe((res) => {
      this.productsData = res;
    });
  }
}
