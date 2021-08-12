import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {Trader} from "./trader";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TraderService {
  constructor(private http: HttpClient) { }

  getTraders(): Observable<Trader[]>{
    let url = 'http://localhost:8000/trader';

    return this.http.get<Trader[]>(url)
      .pipe(
        catchError(
          this.handleError<Trader[]>(`getTraders`)
        )
      );
  }

  getTrader(id: string): Observable<Trader>{
    let url = `http://localhost:8000/trader/${id}`;

    return this.http.get<Trader>(url)
      .pipe(
        catchError(
          this.handleError<Trader>(`getTrader id=${id}`)
        )
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
