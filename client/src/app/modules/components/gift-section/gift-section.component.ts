import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-gift-section',
  templateUrl: './gift-section.component.html',
  styleUrls: ['./gift-section.component.scss']
})
export class GiftSectionComponent implements OnInit {

  constructor(
    public dataService: DataService,
  ) { }

  choice(choice:string){
    this.dataService.choice.next(choice);
  }

  ngOnInit(): void {
  }

}
