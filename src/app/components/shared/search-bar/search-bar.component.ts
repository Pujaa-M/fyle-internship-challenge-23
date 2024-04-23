import { Component, EventEmitter, Output } from '@angular/core';
import { Constants } from 'src/app/enums/constants.enum';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>()
  searchValue: string = ''

  emitSearchValue = () => {
    this.search.emit(this.searchValue)
  }

  emitSearchValueOnKeyPress = (event:KeyboardEvent) => {
    if(event.key === Constants.ENTER_KEY) {
      this.search.emit(this.searchValue)
    }
  }
}
