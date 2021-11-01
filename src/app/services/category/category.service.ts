import { Injectable } from '@angular/core';
import { Observable, of, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../../data/models/category';
import { CategoryServiceMock } from './category.service.mock';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private data: CategoryServiceMock) { }

  categories$: Observable<Category[]> = of(this.data.category);

  getCategoryName(categoryId: number): string {
    console.log(`CatService::getCategoryName categoryId ${categoryId}`)
    console.log(`CatService::getCategoryName name ${this.data.category[categoryId].name}`)
    return this.data.category[categoryId].name;
  }

  getSubcategoryName(subcategoryId: number): string {
    console.log(`CatService::getSubcategoryName categoryId ${subcategoryId}`)
    console.log(`CatService::getSubcategoryName name ${this.data.subCategory[subcategoryId].name}`)
    return this.data.subCategory[subcategoryId].name;
  }

  getSubCategories(categoryId : number): Observable<Category[]>
  {
    let cat_subcat$ = of(this.data.category_subcategory);
    let subcat$ = of(this.data.subCategory);
    let subCatIDs$ = of(this.data.category_subcategory[categoryId]);

    return zip(subcat$, subCatIDs$)
    .pipe(
      map(([subCats, subCatIDs]) => {
        return subCatIDs.map(subCatID => subCats.find(subCat => subCat.id === subCatID) as Category);
      }),        
    )
  }
}
