import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private apiService: ApiService
  ) {}

  title: string = "fyle-frontend-challenge"

  ngOnInit() {
  }
}
