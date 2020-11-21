import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/playlists';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylistForUser(user): Observable<any> {
    return this.http.get(API_URL + '/' + user);
  }

  addNewPlaylist(title,songs,user): Observable<any> {
    return this.http.post(API_URL,{
      title: title,
      songsId: songs,
      createdBy: user
    });
  }

  getPlaylistById(id): Observable<any> {
    return this.http.get(API_URL + '/id/' + id);
  }
}
