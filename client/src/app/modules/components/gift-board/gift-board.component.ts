import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-gift-board',
  templateUrl: './gift-board.component.html',
  styleUrls: ['./gift-board.component.scss']
})
export class GiftBoardComponent implements OnInit {

  public gifts: any[]=[];

  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.giftsAvailable.subscribe(gifts=>this.gifts=gifts);
  }

}
