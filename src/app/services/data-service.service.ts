import { Injectable } from '@angular/core';
import { Observable, of, scheduled, Subscription, zip } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Category } from '../data/models/category';
import { DataServiceMock } from './data-service.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private data: DataServiceMock) { }

}
