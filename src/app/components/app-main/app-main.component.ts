import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {

  constructor(private categoryService: DataService) { }

  subCategories$ = this.categoryService.getSubCategories(0);
  
  ngOnInit(): void {
  }

}
