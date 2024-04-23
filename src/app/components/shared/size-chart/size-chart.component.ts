import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-size-chart',
  templateUrl: './size-chart.component.html',
  styleUrls: ['./size-chart.component.scss']
})
export class SizeChartComponent {
  @Input() styles:any = []
}
