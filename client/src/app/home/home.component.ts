import { Component, OnInit, Inject} from '@angular/core';
import { UserService } from '../services/user.service';
import { SongService } from '../services/song.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: any;
  title = 'Card View Demo';
  filteredResult: any;
  isLoggedIn:boolean
  gridColumns = 3;
  addingToPlaylist: boolean

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
  constructor(private userService: UserService,private SongService: SongService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.getSongs();
  }

  getSongs(){
    this.SongService.getAllSongs().subscribe(
      data => {
        this.content = data
        this.filteredResult = this.content
      },
      err => {
        this.content = JSON.parse(err.error).messsage
      }
    )

  }

  applyFilter(event){
    console.log(event.target.value);
    this.filteredResult = this.content.filter(ws => ws.name.includes(event.target.value));
  }


  addSongToPlaylist(song): void {
    console.log(song)
    this.addingToPlaylist = true;
  }

}
