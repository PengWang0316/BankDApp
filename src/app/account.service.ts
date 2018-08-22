import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FETCH_ALL_ACCOUNT_API } from '../UrlApis';

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
}
