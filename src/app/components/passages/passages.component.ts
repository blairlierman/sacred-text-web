import { Component, OnInit } from '@angular/core';
import { PassageService } from 'src/app/services/passage/passage.service';

@Component({
  selector: 'app-passages',
  templateUrl: './passages.component.html',
  styleUrls: ['./passages.component.scss']
})
export class PassagesComponent implements OnInit {

  constructor(private passageService: PassageService) { }

  passages$ = this.passageService.getPassages(1);

  ngOnInit(): void {
  }

}
