import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private showBackButton = new Subject<boolean>();
  showBackButton$ = this.showBackButton.asObservable();

  backButtonVisibility(showBackButton: boolean) {
    this.showBackButton.next(showBackButton);
    console.log(`NavService: backButtonVisibility ${showBackButton}`)
  }
}
