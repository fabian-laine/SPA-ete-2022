import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }


  closeModal() {
    this.dialog.closeAll();
  }

  ngOnInit(): void {
  }

}
