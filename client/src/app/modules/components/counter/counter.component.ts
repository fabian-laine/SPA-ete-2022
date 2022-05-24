import {Component, Inject, OnInit} from '@angular/core';
import {PlatformService} from "../../../core/services/platform.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public window: any;
  public counterString = '12345';
  constructor(
    private platformService:PlatformService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    if (this.platformService.isBrowser()){
      this.counterString=this.window.counterString;
    }
  }

}
