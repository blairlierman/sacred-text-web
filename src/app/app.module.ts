import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppSubcategoriesComponent } from './components/app-subcategories/app-subcategories.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';
import { PassagesComponent } from './components/passages/passages.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppSubcategoriesComponent,
    PassagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AngularSvgIconModule.forRoot(), // angular-svg-icon library module
		AngularSvgIconPreloaderModule.forRoot({
			configUrl: '/assets/json/svg-icons.json',
		}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
