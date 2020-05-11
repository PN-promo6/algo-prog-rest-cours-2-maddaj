import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from '../../models/player/player';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): Observable<Player[]> {
    let obsData: Observable<Player[]> = this.httpClient.get<Player[]>('http://localhost:3000/users');
    return obsData;
  }

  public fetchUserById(id: string): Observable<Player[]> {
    let obsDataById: Observable<Player[]> = this.httpClient.get<Player[]>('http://localhost:3000/users/' + id);
    return obsDataById;
  }
}
