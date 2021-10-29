import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { NavigationService } from './services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  appTitle = 'Sacred Text Lite';
  categorySub$ !: Subscription;

  constructor(public navigation: NavigationService, public router: Router,
    private route: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit(): void {
    this.categorySub$ = this.navigation.category$.subscribe(categoryName => {
      if(categoryName)
      {
        this.titleService.setTitle(`${categoryName} - ${this.appTitle}`);
      }
      else
      {
        this.titleService.setTitle(`${this.appTitle}`);
      }
    });
  }

  ngOnDestroy(): void {
    this.categorySub$.unsubscribe();
  }

  goBack() {
    if(this.router.url.match(/categories/)) { this.router.navigate(['/']);}
    else { this.router.navigate(['/']);}
  }
}
