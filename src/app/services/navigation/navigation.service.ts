import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private showBackButton = new BehaviorSubject<boolean>(false);
  showBackButton$ = this.showBackButton.asObservable();

  backButtonVisibility(showBackButton: boolean) {
    this.showBackButton.next(showBackButton);
  }
}
