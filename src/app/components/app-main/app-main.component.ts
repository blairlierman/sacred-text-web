import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  subCategories$ = this.categoryService.getSubCategories(0);
  
  ngOnInit(): void {
  }

}
