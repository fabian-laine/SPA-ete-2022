import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalVideoComponent} from "../modal-video/modal-video.component";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  openModalVideo() {
    this.dialog.open(ModalVideoComponent)
  }

  ngOnInit(): void {
  }

}
