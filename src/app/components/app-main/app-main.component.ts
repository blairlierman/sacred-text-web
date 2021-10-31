import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {

  constructor(private categoryService: CategoryService, private navigation: NavigationService,
    private route: ActivatedRoute) { 
    this.navigation.backButtonVisibility(false);
    this.navigation.setCategory(null);
    this.navigation.setSubcategory(null);
  }

  categories$ = this.categoryService.categories$;
  
  ngOnInit(): void {
  }

}
