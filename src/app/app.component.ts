import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from './services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sacred-text-web';

  constructor(public navigation: NavigationService, public router: Router,
    private route: ActivatedRoute) {
      // const categoryId = this.route.snapshot.paramMap.get('id');
      // console.log(`AppComponent categoryId in snapshot:${categoryId}`);
      // this.route.paramMap.subscribe(paramMap => {
      //   const categoryId = paramMap.get('id');
      //   console.log(`AppComponent categoryId in paramMap:${categoryId}`);
      //   if(categoryId != null) { this.navigation.setCategory(parseInt(categoryId)); }
      // });
  }

  ngOnInit(): void {
    // const categoryId = this.route.snapshot.paramMap.get('id');
    // console.log(`AppComponent::ngOnInit categoryId in snapshot:${categoryId}`);
    // this.route.paramMap.subscribe(paramMap => {
    //   const categoryId = paramMap.get('id');
    //   console.log(`AppComponent::ngOnInit categoryId in paramMap:${categoryId}`);
    //   if(categoryId != null) { this.navigation.setCategory(parseInt(categoryId)); }
    // });
  }

  goBack() {
    if(this.router.url.match(/categories/)) { this.router.navigate(['/']);}
    else { this.router.navigate(['/']);}
  }
}
