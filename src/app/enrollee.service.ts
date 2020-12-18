import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  private baseUrl = 'http://localhost:8080/enrollees';

  constructor(private http: HttpClient) { }

  getEnrollee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  updateEnrollee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getEnrolleesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
