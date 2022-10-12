import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  openFormCategory: boolean = false;
  openFilterForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addFilterCategory(){
    this.openFilterForm = true;
  }

  closeFilterForm(){
    this.openFilterForm = false;
  }

  addCategory(){
    this.openFormCategory = true;
  }

  closeCategoryForm(){
    this.openFormCategory = false;
  }


}
