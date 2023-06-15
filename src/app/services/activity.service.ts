import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  server = 'http://admin.marbellasportsclubs.com';
  baseURL = this.server + '/api/activityPortfolio';
  headers = new HttpHeaders({
    'X-Requested-With': 'XMLHttpRequest',
  });
  constructor(private _http: HttpClient) {}
  get() {
    return this._http.get(this.baseURL, { headers: this.headers });
  }
}
