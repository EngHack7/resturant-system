import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor( private http : HttpClient,

  ) { }

  Search(key:string) : Observable<any> {
    let header = new HttpHeaders().set('key_name',key)
    return this.http.get('',{headers : header})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message)
  }
}
