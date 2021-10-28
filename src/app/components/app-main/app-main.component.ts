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
    // const categoryId = this.route.snapshot.paramMap.get('id');
    // console.log(`AppMainComponent categoryId in snapshot:${categoryId}`);
    // this.route.paramMap.subscribe(paramMap => {
    //   const categoryId = paramMap.get('id');
    //   console.log(`AppMainComponent categoryId in paramMap:${categoryId}`);
    //   if(categoryId != null) { this.navigation.setCategory(parseInt(categoryId)); }
    // });
  }

  categories$ = this.categoryService.categories$;
  
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
