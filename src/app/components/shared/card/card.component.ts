import { Component, Input } from '@angular/core';
import { Constants } from 'src/app/enums/constants.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() repoTitle: string = ''
  @Input() description: string = ''
  @Input() url: string = ''
  @Input() languages: any = []

  tertiaryColor: string = Constants.TERTIARY_COLOR

displayPercentage = ({content, width}:any) => {
  return content + ' ' + width
}
}
