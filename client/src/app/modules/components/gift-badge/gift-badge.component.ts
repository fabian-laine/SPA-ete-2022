import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../core/services/data.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-gift-badge',
  templateUrl: './gift-badge.component.html',
  styleUrls: ['./gift-badge.component.scss']
})
export class GiftBadgeComponent implements OnInit {

  @Input() public gift:any;
  public showEuro=true;

  public selectedAmountFormGroup : FormGroup | undefined;

  constructor(
    public dataService: DataService,
  ) { }

  selectThis() {
    this.dataService.giftSelected.next(this.gift);
  }

  initSelectedAmountFormGroup() {
    this.selectedAmountFormGroup = new FormGroup({
      'selectedAmount': new FormControl('')
    });

    this.selectedAmountFormGroup.get('selectedAmount')?.valueChanges.subscribe(change=>{
      this.dataService.selectedAmount.next(change);
    });
  }

  ngOnInit(): void {
    this.initSelectedAmountFormGroup();
  }

}
