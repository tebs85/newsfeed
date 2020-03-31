import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private apiKey = 'e1e45e90a23441e39ae788e702467a77';
  private country = 'za';
  private newApiBaseUrl = `https://newsapi.org/v2`;

  constructor(private http: HttpClient) { }

  getStories(endPoint: string): Observable<any> {
    return this.http.get(`${this.newApiBaseUrl}/${endPoint}?language=en&apiKey=${this.apiKey}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
