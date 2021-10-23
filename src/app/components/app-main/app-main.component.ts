import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {

  constructor(private categoryService: CategoryService, private navService: NavigationService) { 
    this.navService.backButtonVisibility(false);
  }

  categories$ = this.categoryService.categories$;
  
  ngOnInit(): void {
  }

}
