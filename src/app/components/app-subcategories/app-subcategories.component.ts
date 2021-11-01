import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/data/models/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-app-subcategories',
  templateUrl: './app-subcategories.component.html',
  styleUrls: ['./app-subcategories.component.scss']
})
export class AppSubcategoriesComponent implements OnInit {
  subCategories$: Observable<Category[]> | undefined;
  
  constructor(private categoryService: CategoryService, private navigation: NavigationService,
    private route: ActivatedRoute) { 
    this.navigation.backButtonVisibility(true);
    const categoryId = this.route.snapshot.paramMap.get('id');
    if(categoryId != null) { 
      const categoryIdNumber = parseInt(categoryId);
      this.navigation.setCategory(categoryIdNumber); 
      this.subCategories$ = this.categoryService.getSubCategories(categoryIdNumber);
    }
  }

  ngOnInit(): void {
  }

}
