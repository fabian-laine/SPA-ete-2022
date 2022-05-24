import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  hideChoice(){
    this.dataService.isChoiceOpen.next(false);
  }

  ngOnInit(): void {
  }

}
