import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { PlaylistService } from '../services/playlist.service'
import { MatAccordion } from '@angular/material/expansion';
import { SongService } from '../services/song.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  formGroup: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username: string
  userid: string
  userPlaylists: any
  filteredResult: any
  songsList: any
  titleSelected: string
  songsSelected: any

  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService, private playlistService: PlaylistService, private SongService: SongService, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'title': new FormControl(null, Validators.required),
      'songs': new FormControl(null, Validators.required)
    });

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      console.log('tokenStorage', this.tokenStorage.getUser())
      this.roles = this.tokenStorage.getUser().roles;
      this.username = this.tokenStorage.getUser().username;
      this.userid = this.tokenStorage.getUser().id;
    }
    this.getUserPlayLists();
    this.getSongs();
  }

  getUserPlayLists() {
    this.playlistService.getPlaylistForUser(this.userid).subscribe(
      data => {
        this.userPlaylists = data
        this.filteredResult = this.userPlaylists
      },
      err => {
        this.userPlaylists = JSON.parse(err.error).messsage
      }
    )
  }

  applyFilter(event) {
    console.log(event.target.value);
    this.filteredResult = this.userPlaylists.filter(ws => ws.title.includes(event.target.value));
  }

  getSongs() {
    this.SongService.getAllSongs().subscribe(
      data => {
        this.songsList = data
      },
      err => {
        this.songsList = JSON.parse(err.error).messsage
      }
    )

  }

  async onSubmit(form) {
    console.log("submitted", form)
    await this.playlistService.addNewPlaylist(form.title, form.songs, this.userid).subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      }
    )
    this.getUserPlayLists;
    this.accordion.closeAll()
  }
  navigateSelectedPlaylist(event) {
    console.log(event)
    this.router.navigate(['/playlistDetail'],{queryParams:{playlist:event._id}})
  }
}
