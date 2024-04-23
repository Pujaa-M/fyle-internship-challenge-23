import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { Constants } from 'src/app/enums/constants.enum';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @Input() length: number = 0

  @Output() pageEvent = new EventEmitter()

  pageSize: number = Constants.PER_PAGE_REPO_SIZE

  handlePageEvent = (event:PageEvent) => {
    this.pageEvent.emit(event)
  }

  goToFirstPage = () => {
    this.paginator.firstPage()
  }
}
