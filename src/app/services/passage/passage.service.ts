import { Injectable } from '@angular/core';
import { Observable, of, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Passage } from 'src/app/data/models/passage';
import { PassageServiceMock } from './passage.service.mock';

@Injectable({
  providedIn: 'root'
})
export class PassageService {

  constructor(private data: PassageServiceMock) { }

  getPassages(subcategoryId : number): Observable<Passage[]>
  {
    let passage$ = of(this.data.passage);
    let passageIds$ = of(this.data.subcat_passage[subcategoryId]);

    return zip(passage$, passageIds$)
    .pipe(
      map(([passages, passageIds]) => {
        return passageIds.map((passageId: number) => passages.find(passage => passage.id === passageId) as Passage);
      }),        
    )
  }
}
