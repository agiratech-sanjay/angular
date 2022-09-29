import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { xemployee } from './employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
// import { throwError } from 'rxjs';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  private _url: string = "/assets/sample.json";
  constructor(private http:HttpClient) { }

  getemployees():Observable<xemployee[]>{
    return this.http.get<xemployee[]>(this._url)
    .pipe(catchError(this.err_emp))
  }
  err_emp(error : HttpErrorResponse){
    return throwError(()=>error.message || "server error");
  }
}
