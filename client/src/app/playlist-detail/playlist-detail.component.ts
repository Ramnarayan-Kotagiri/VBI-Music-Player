import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../services/playlist.service'
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  playListDetails:any
  playListTitle: string
  songDetails = []
  filteredResult: any

  constructor(private route: ActivatedRoute,private playlistService: PlaylistService,private SongService: SongService) { }

  ngOnInit(): void {
    const playlist: string = this.route.snapshot.queryParamMap.get('playlist');
    this.playlistService.getPlaylistById(playlist).subscribe(
      data => {
        this.playListDetails = data[0];
        this.playListTitle = this.playListDetails.title
        console.log(this.playListDetails)
        this.getSongsForPlaylist(this.playListDetails.songsId)
      },
      err => {
        this.playListDetails = JSON.parse(err.error).messsage
      }
    )
  }

  getSongsForPlaylist(songs){
   songs.forEach((song) => {
      this.SongService.getSongById(song).subscribe(
        data => {
          this.songDetails.push(data[0])
          this.filteredResult = this.songDetails
          console.log(this.filteredResult)
        },
        err => {
          console.log(err)
        }
      )
    })

  }

  applyFilter(event) {
    this.filteredResult = this.songDetails.filter(ws => ws.name.includes(event.target.value));
  }

  shuffleSongs(){
    for (let i = this.filteredResult.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.filteredResult[i], this.filteredResult[j]] = [this.filteredResult[j], this.filteredResult[i]];
  }
  }



}
