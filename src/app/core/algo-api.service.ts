import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlgoApiService {

  private REST_API_SERVER = "https://jsonplaceholder.typicode.com/todos/1";

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  apiData = new BehaviorSubject<any>("")
  apiDataObservable = this.apiData.asObservable();

  updateApiData(data: any){
    this.apiData.next(data)
    localStorage.setItem("apiResponse", data.toString());
  }

   handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
