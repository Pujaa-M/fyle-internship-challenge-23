import { Component, Input } from '@angular/core';
import { Constants } from 'src/app/enums/constants.enum';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() chipContent: string = ''
  @Input() chipColor: string = Constants.OTHERS_CHIP_COLOR
}
