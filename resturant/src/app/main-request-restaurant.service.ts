import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MainRequestRestaurantService {

  constructor(private http : HttpClient) { }



mainPage(id : string):Observable<any>{
  let url = "http://35.226.73.186/TableOrdering/api/services/app/publicRequests/GetRestaurantInfo?resturantId=7"
  return this.http.get<any>(url).pipe(
    catchError(this.errorHandler)
  )
}

errorHandler(error : HttpErrorResponse){
  return throwError(error.message)
}

}
