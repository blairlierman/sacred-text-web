import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppSubcategoriesComponent } from './components/app-subcategories/app-subcategories.component';

const routes: Routes = [
  { path: '', component: AppMainComponent },
  { path: 'categories/:id/subcategories', component: AppSubcategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
