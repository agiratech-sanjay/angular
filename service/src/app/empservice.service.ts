import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { xemployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  private _url: string = "/assets/sample.json";
  constructor(private http:HttpClient) { }

  getemployees():Observable<xemployee[]>{
    return this.http.get<xemployee[]>(this._url);
  }
}
