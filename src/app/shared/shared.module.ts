import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../home/home.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CommonModule,  FormsModule],
  declarations: []
})
export class SharedModule { }
