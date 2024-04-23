import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser = (githubUsername: string, token: string):Observable<any> => {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`, {headers: {Authorization: `token ${token}`}});
  }

  getUrlData = (gitUrl:string, token: string): Observable<any> => {
    return this.httpClient.get(gitUrl, {headers: {Authorization: `token ${token}`}})
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
