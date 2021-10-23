import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-app-subcategories',
  templateUrl: './app-subcategories.component.html',
  styleUrls: ['./app-subcategories.component.scss']
})
export class AppSubcategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService, private navService: NavigationService) { 
    this.navService.backButtonVisibility(true);
  }

  subCategories$ = this.categoryService.getSubCategories(1);

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
  }

}
