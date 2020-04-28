import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, concat } from 'rxjs';
import { retry, catchError, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';

  constructor(
    private http: HttpClient
  ) { }

  getStories(channels: any[]) {
    const observables = channels.map(story => this.http.get(`${this.rssToJsonServiceBaseUrl}${story.url}`));
    return concat(...observables).pipe(toArray());
  }

  getFeedContent(url: string): Observable<any> {
    return this.http.get(`${this.rssToJsonServiceBaseUrl}` + url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
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
