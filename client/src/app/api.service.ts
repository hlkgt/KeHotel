import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:4800/api/server';

  constructor(private http: HttpClient) {}
  getList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/list');
  }
  getPopular(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/popular');
  }
}
