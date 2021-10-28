import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-app-subcategories',
  templateUrl: './app-subcategories.component.html',
  styleUrls: ['./app-subcategories.component.scss']
})
export class AppSubcategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService, private navigation: NavigationService,
    private route: ActivatedRoute) { 
    this.navigation.backButtonVisibility(true);
    const categoryId = this.route.snapshot.paramMap.get('id');
    if(categoryId != null) { this.navigation.setCategory(parseInt(categoryId)); }
  }

  subCategories$ = this.categoryService.getSubCategories(1);

  ngOnInit(): void {
    // const categoryId = this.route.snapshot.paramMap.get('id');
    // console.log(`AppMainComponent::ngOnInit categoryId in snapshot:${categoryId}`);
    // this.route.paramMap.subscribe(paramMap => {
    //   console.log(`ParamMap: ${JSON.stringify(paramMap)}`);
    //   const categoryId = paramMap.get('id');
    //   console.log(`AppMAinComponent::ngOnInit categoryId in paramMap:${categoryId}`);
    //   if(categoryId != null) { this.navigation.setCategory(parseInt(categoryId)); }
    // });
  }

}
