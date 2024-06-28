import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interface/customer-interface';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  BASEURL: string = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  load(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.BASEURL}/load`);
  }

  query(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.BASEURL}/query`);
  }

  clear(): Observable<void> {
    return this.http.get<void>(`${this.BASEURL}/clear`);
  }
}
