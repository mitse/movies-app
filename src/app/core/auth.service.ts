import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Constants } from '../constants';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private apiEndpoint = Constants.apiEndpoint;
  private apiKey = Constants.apiKey;

  sessionId: string;

  constructor( private http: HttpClient) { }

  public getNewSessionId(): Observable<any> {
    if(this.sessionId)
       return of(this.sessionId);
    return this.http.get<Response>(`${this.apiEndpoint}/authentication/guest_session/new?api_key=${this.apiKey}`)
        .pipe(
          tap(res => this.sessionId = res['guest_session_id']),
          map(res => res['guest_session_id'])
          );
  }

}
