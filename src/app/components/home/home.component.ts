import { Component, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api.service';
import { PaginatorComponent } from '../shared/paginator/paginator.component';
import { Constants } from 'src/app/enums/constants.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(PaginatorComponent) paginator!: PaginatorComponent

  userDetails:any = null
  reposDetails: any[] = []
  items: number[] = Array.from({length: 6}).map((_, index) => index + 1)
  numberOfRepos: number = 0
  pageNumber: number = 0
  perPageRepos: number = Constants.PER_PAGE_REPO_SIZE

  isSearched: boolean = false
  userFound: boolean = true

  msg: string = ''
  pat: string = ''

  constructor(private apiService: ApiService) {}

  loadPage = () => {
    this.apiService.getUrlData(`${this.userDetails.repos_url}?page=${this.pageNumber + 1}&per_page=${this.perPageRepos}`, this.pat).subscribe((reposData) => {
      reposData.forEach(({name, description, html_url, languages_url}:any) => {
        this.apiService.getUrlData(languages_url, this.pat).subscribe((languagesData) => {
          let languagesSize: number[] = Object.values(languagesData)
          let languages: string[] = Object.keys(languagesData)
          let languagesDetails: any[] = []
          let totalSize: number = languagesSize.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          let size: number = 0
          languages.forEach((language, index) => {
            if(index < 5) {
              languagesDetails.push({
                content: language,
                width: `${((languagesSize[index] / totalSize) * 100).toFixed(1)}%`,
                class: `bg-chip-color-${index + 1}`
              })
              size += languagesSize[index]
            }
          })

          if(size !== totalSize) {
            languagesDetails.push({
              content: Constants.OTHERS,
              width: `${(((totalSize - size) / totalSize) * 100).toFixed(1)}%`,
              class: Constants.OTHERS_CHIP_COLOR})
          }

          let repoDetails: any = {
            repoName: name,
            description: description,
            url: html_url,
            languagesData: languagesDetails
          }
          this.reposDetails.push(repoDetails)
        })
      });
    })
  }

  searchUser = (username:string) => {
    this.isSearched = true
    this.userDetails = null

    this.apiService.getUser(username, this.pat).subscribe(({login, avatar_url, html_url, bio, followers, following, public_repos, repos_url}) => {
      this.userFound = true
      this.userDetails = {
        username: login,
        avatar: avatar_url,
        url: html_url,
        bio: bio,
        followers: followers,
        following: following,
        repos_url: repos_url
      }

      this.numberOfRepos = public_repos
      this.reposDetails = []

      if(this.pageNumber !== 0) {
        this.paginator.goToFirstPage()
      }
      else {
        this.loadPage()
      }

      this.pageNumber = 0
    }, (error) => {
        this.userFound = false
        if(error.status === 404) {
          this.msg = Constants.NOT_FOUND_ERR_MSG
        }
        else {
          this.msg = Constants.OTHER_ERR_MSG
        }
    })
  }

  turnPage = (event:PageEvent) => {
    this.reposDetails = []
    this.pageNumber = event.pageIndex
    this.loadPage()
  }
}
