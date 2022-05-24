import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public state = 'init';

  constructor() {
  }

  changeState(state:string){
    this.state=state;
  }

  ngOnInit(): void {
  }

}
