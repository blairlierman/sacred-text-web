import { Injectable } from '@angular/core';
import { Observable, of, scheduled, Subscription, zip } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Category } from '../data/models/category';
import { DataServiceMock } from './data-service.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private data: DataServiceMock) { }

  getSubCategories(categoryId : number): Observable<Category[]>
  {
    let cat_subcat$ = of(this.data.category_subcategory);
    let subcat$ = of(this.data.subCategory);
    let subCatIDs$ = of(this.data.category_subcategory[categoryId]);

    return zip(subcat$, subCatIDs$)
    .pipe(
      map(([subCats, subCatIDs]) => {
        return subCatIDs.map(subCatID => subCats.find(subCat => subCat.id === subCatID))
        // return subCats;
      }),        
    )
  }
}
