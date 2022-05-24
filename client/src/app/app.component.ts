import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "./core/services/data.service";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
  ) {
  }

  getQueryParamsSuccess(queryParams: any) {
    if (queryParams.reserved_code_media) {
      this.dataService.codeMedia.next(queryParams.reserved_code_media);
    }
  }

  setGiftsAvailable(results: any[]){
    console.log(results[0])
    let choice = results[0];
    let codeMedia = results[1];

    if (choice=='summer') {
      if (codeMedia.toLowerCase().includes('p')){
        this.dataService.giftsAvailable.next(this.dataService.gifts.filter(x => x.choice=='summer' && x.for=='prospect'));
      } else {
        this.dataService.giftsAvailable.next(this.dataService.gifts.filter(x => x.choice=='summer' && x.for=='fidelisation'));
      }
    } else {
      this.dataService.giftsAvailable.next(this.dataService.gifts.filter(x => x.choice=='year'));
    }
    this.dataService.giftSelected.next(this.dataService.giftsAvailable.value[0]);
  }

  ngOnInit() {
    combineLatest([
      this.dataService.choice,
      this.dataService.codeMedia,
    ]).subscribe(results=>this.setGiftsAvailable(results));
    this.activatedRoute.queryParams.subscribe(queryParams => this.getQueryParamsSuccess(queryParams));
  }

}
