import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-app-subcategories',
  templateUrl: './app-subcategories.component.html',
  styleUrls: ['./app-subcategories.component.scss']
})
export class AppSubcategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  subCategories$ = this.categoryService.getSubCategories(1);

  ngOnInit(): void {
  }

}
