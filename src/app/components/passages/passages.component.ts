import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PassageService } from 'src/app/services/passage/passage.service';

@Component({
  selector: 'app-passages',
  templateUrl: './passages.component.html',
  styleUrls: ['./passages.component.scss']
})
export class PassagesComponent implements OnInit {

  constructor(private passageService: PassageService, private categoryService: CategoryService, private navigation: NavigationService,
    private route: ActivatedRoute) { 
    this.navigation.backButtonVisibility(true);
    const subcategoryId = this.route.snapshot.paramMap.get('id');
    if(subcategoryId != null) { this.navigation.setSubcategory(parseInt(subcategoryId)); }
  }

  passages$ = this.passageService.getPassages(1);

  ngOnInit(): void {
  }

}
