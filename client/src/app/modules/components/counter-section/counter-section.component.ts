import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-counter-section',
  templateUrl: './counter-section.component.html',
  styleUrls: ['./counter-section.component.scss']
})
export class CounterSectionComponent implements OnInit {

  constructor(
    public dataService: DataService,
  ) { }

  showChoice(){
    if (!this.dataService.isChoiceOpenYet.value) {
      this.dataService.isChoiceOpen.next(true);
      this.dataService.isChoiceOpenYet.next(true);
    }
  }

  ngOnInit(): void {
  }

}
