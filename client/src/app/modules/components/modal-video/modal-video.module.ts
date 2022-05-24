import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalVideoComponent } from './modal-video.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    ModalVideoComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class ModalVideoModule { }
