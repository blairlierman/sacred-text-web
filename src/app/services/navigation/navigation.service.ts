import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CategoryService } from '../category/category.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private showBackButton = new Subject<boolean>();
  showBackButton$ = this.showBackButton.asObservable();
  private currentCategory = new Subject<string>();
  category$ = this.currentCategory.asObservable();
  private currentSubcategory = new Subject<string>();
  subcategory$ = this.currentSubcategory.asObservable();

  constructor(private categoryService: CategoryService) {}

  backButtonVisibility(showBackButton: boolean) {
    this.showBackButton.next(showBackButton);
    console.log(`NavService: backButtonVisibility ${showBackButton}`)
  }

  setCategory(categoryId: number | null)
  {
    console.log(`NavService::setCategory categoryId ${categoryId}`)
    if(categoryId !== null && categoryId !== undefined) {
      console.log(`NavService::setCategory categoryId ${categoryId}`)
      const categoryName = this.categoryService.getCategoryName(categoryId);
      this.currentCategory.next(categoryName);
    }
  }
}
