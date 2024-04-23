import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchIconComponent } from './search-icon/search-icon.component';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    SearchIconComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  exports: [
    SearchIconComponent
  ]
})
export class IconsModule { }
