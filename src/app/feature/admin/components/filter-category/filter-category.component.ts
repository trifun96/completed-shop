import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api-service';
import { filterCategory } from 'src/app/shared/models/filterCategory.model';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.css']
})
export class FilterCategoryComponent implements OnInit {
  filterCategoryModelObj: filterCategory = new filterCategory();
  constructor(private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  filterCategoryForm = new FormGroup({
  filterCategoryName: new FormControl(this.filterCategoryModelObj.filterCategory),
  })


  postFilterCategoryData(){
this.filterCategoryModelObj.filterCategory = this.filterCategoryForm.value.filterCategoryName;

this.api.postFilterCategories(this.filterCategoryModelObj).subscribe(res =>{
this.toastr.success('You are successfully added filter category');
console.log('daj filtere', this.filterCategoryModelObj)
})

  this.filterCategoryForm.reset();
  }



}
