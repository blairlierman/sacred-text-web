import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sacred-text-web';

  constructor(public navigation: NavigationService, public router: Router) {}

  goBack() {
    if(this.router.url.match(/categories/)) { this.router.navigate(['/']);}
    else { this.router.navigate(['/']);}
  }
}
