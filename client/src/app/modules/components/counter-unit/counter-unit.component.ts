import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-unit',
  templateUrl: './counter-unit.component.html',
  styleUrls: ['./counter-unit.component.scss']
})
export class CounterUnitComponent implements OnInit {

  @Input() public counterNumber: string | undefined=undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
