import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Passage } from 'src/app/data/models/passage';
import { CategoryService } from 'src/app/services/category/category.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PassageService } from 'src/app/services/passage/passage.service';

@Component({
  selector: 'app-passages',
  templateUrl: './passages.component.html',
  styleUrls: ['./passages.component.scss']
})
export class PassagesComponent implements OnInit {
  passages$: Observable<Passage[]> | undefined;
  
  constructor(private passageService: PassageService, private categoryService: CategoryService, private navigation: NavigationService,
    private route: ActivatedRoute) { 
    this.navigation.backButtonVisibility(true);
    const subcategoryId = this.route.snapshot.paramMap.get('id');
    if(subcategoryId != null) { 
      const subcategoryIdNumber = parseInt(subcategoryId);
      this.navigation.setSubcategory(subcategoryIdNumber); 
      this.passages$ = this.passageService.getPassages(subcategoryIdNumber);
    }
  }


  ngOnInit(): void {
  }

}
