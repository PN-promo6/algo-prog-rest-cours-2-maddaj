import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/user/user';
import { Event } from '../../models/event/event';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): Observable<User[]> {
    let obsData: Observable<User[]> = this.httpClient.get<User[]>('http://localhost:3000/users');
    return obsData;
  }

  public fetchUserById(id: string): Observable<User[]> {
    let obsDataById: Observable<User[]> = this.httpClient.get<User[]>('http://localhost:3000/users/' + id);
    return obsDataById;
  }

  public fetchEvents(): Observable<Event[]> {
    let obsDataEvents: Observable<Event[]> = this.httpClient.get<Event[]>('http://localhost:3000/events');
    return obsDataEvents;
  }
}
