import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const url = 'https://jsonplaceholder.typicode.com/';
const headerConfig = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
    providedIn: 'root'
})

export class AppService {
  constructor(private http: HttpClient) { }

   getDataPx(): Observable<any>{
    return this.http.get<any>(url+'photos', headerConfig);
   }

   getDataUser(): Observable<any>{
    return this.http.get<any>(url+'users', headerConfig);
   }
}
