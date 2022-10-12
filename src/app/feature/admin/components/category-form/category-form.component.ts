import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryModelObj: Category = new Category();
  constructor(private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  categoryForm = new FormGroup({
    categoryName: new FormControl(this.categoryModelObj.categoryName),
  })

  postCategoryData(){
    this.categoryModelObj.categoryName = this.categoryForm.value.categoryName;
    console.log('category', this.categoryModelObj)

    this.api.postCategories(this.categoryModelObj).subscribe(res =>{
      this.toastr.success('You are successfully added category!');
      return res;
    })

    this.categoryForm.reset();
  }
  

}
