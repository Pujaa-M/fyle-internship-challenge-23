import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip/chip.component';
import { SizeChartComponent } from './size-chart/size-chart.component';
import { PaginatorComponent } from './paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CardComponent } from './card/card.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    ChipComponent,
    SizeChartComponent,
    PaginatorComponent,
    CardComponent,
    SearchBarComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    IconsModule,
    FormsModule
  ],
  exports: [
    ChipComponent,
    SizeChartComponent,
    PaginatorComponent,
    CardComponent,
    SearchBarComponent,
    SkeletonLoaderComponent
  ]
})
export class SharedModule { }
