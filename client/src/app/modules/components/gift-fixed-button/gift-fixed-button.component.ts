import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../core/services/data.service";
import {PlatformService} from "../../../core/services/platform.service";

@Component({
  selector: 'app-gift-fixed-button',
  templateUrl: './gift-fixed-button.component.html',
  styleUrls: ['./gift-fixed-button.component.scss']
})
export class GiftFixedButtonComponent implements OnInit {

  public droppedLeft= false;
  constructor(
    public dataService: DataService,
    public platformService: PlatformService,
  ) { }

  toggleChoice(){
    this.dataService.isChoiceOpen.next(!this.dataService.isChoiceOpen.value);
  }

  select(choice:string){
    this.dataService.choice.next(choice);

    let urlFormProspect = 'https://soutenir.la-spa.fr/b?cid=274&lang=fr_FR';
    let urlFormFidelisation = 'https://soutenir.la-spa.fr/b?cid=275&lang=fr_FR';
    let urlFormPA = 'https://soutenir.la-spa.fr/b?cid=276&lang=fr_FR';

    if (this.platformService.isBrowser()) {
      if (choice=='summer'){
        if (this.dataService.codeMedia.value=='' || this.dataService.codeMedia.value.toLowerCase().includes('p')) {
          // @ts-ignore
          window.open(urlFormProspect, '_blank').focus();
        } else {
          if (this.dataService.codeMedia.value.toLowerCase().includes('f')){
            // @ts-ignore
            window.open(urlFormFidelisation, '_blank').focus();
          }
        }
      }
      if (choice=='year'){
        // @ts-ignore
        window.open(urlFormPA, '_blank').focus();
      }

    }
  }
  ngOnInit(): void {
  }

}
