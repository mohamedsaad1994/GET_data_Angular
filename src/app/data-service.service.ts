import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private _url: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getData(): Observable<IData[]> {
    return this.http.get<IData[]>(this._url);
  }
  
}
