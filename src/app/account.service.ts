import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FETCH_ALL_ACCOUNT_API, ADD_USER_API } from '../UrlApis';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  fetchAllAcount(): Observable<object []> {
    return this.http.get<Object []>(FETCH_ALL_ACCOUNT_API);
  }

  addUser(firstName: string, lastName: string, initailAmount: number): Observable<string> {
    return this.http.post<string>(ADD_USER_API, { firstName, lastName, initailAmount });
  }

  fetchBalance(userId: string): Observable<string> {
    return this.http.get<string>(userId);
  }
}
