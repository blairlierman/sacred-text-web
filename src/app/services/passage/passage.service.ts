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
    let religions$ = of(this.data.religion);

    return zip(passage$, passageIds$, religions$)
    .pipe(
      map(([passages, passageIds, religions]) => {
        return passageIds.map((passageId: number) => {
            const passage = passages.find(passage => passage.id === passageId); 
            const religion = religions.find(religion => religion.id == passage?.religionId);

            return {...passage, religion: religion?.name} as Passage;
          }
          );
      }),        
    )
  }
}
