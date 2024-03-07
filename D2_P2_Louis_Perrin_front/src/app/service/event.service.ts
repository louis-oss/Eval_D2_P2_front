import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiUrl: string = 'http://localhost:3000/';
  http: HttpClient; 

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }

  deleteEvent(title: string): Observable<Event> {
    return this.http.delete<Event>(this.apiUrl + title);
  }
}
