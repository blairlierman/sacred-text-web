import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppSubcategoriesComponent } from './components/app-subcategories/app-subcategories.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';
import { PassagesComponent } from './components/passages/passages.component';

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
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
