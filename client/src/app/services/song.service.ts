import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/songs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  getAllSongs(): Observable<any> {
    return this.http.get(API_URL);
  }

  getSongById(id): Observable<any> {
    return this.http.get(API_URL + '/' + id);
  }

}
