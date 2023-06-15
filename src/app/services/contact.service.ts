import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private _http: HttpClient) {}
  server = 'http://admin.marbellasportsclubs.com';
  baseURL = this.server + '/api/contactPortfolio';
  post(body: any) {
    return this._http.post(this.baseURL, body);
  }
}
