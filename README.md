# VBI Music Player
🎻 VBI Music App contains authentication, authorization APIs along with session management.

##  Prerequisites
* AngularJS
* NodeJS
* MongoDB

## Run the App Locally

### Install the dependencies
npm install

### Start the application
npm start

### Live Demo
 [VBI Music Player](https://shielded-hollows-40674.herokuapp.com)

### API Endpoints
| routes               | method | function             | param/body                                                                                                              |
| -------------------- | ------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| api/auth/signup      | post   | Sign up api          | {"username":"ramnarayan","email":"rnrkotagiri@gmail.com","password":"password","roles":["5fb9f5517256d42d5caa6d6d"]   } |
| api/auth/signin      | post   | Sign in api          | {"username":"ramnarayan","password":"password"}                                                                         |
| api/songs            | get    | Fetch all songs      | -                                                                                                                       |
| api/songs            | post   | Add new song         | {"name":"Hey Jude","artist":"Beatles","duration":6}                                                                     |
| api/songs/:song      | get    | Fetch Song by ID     | {song: "5fb92dbc80c6100b941c3be8"}                                                                                      |
| api/playlists        | get    | Fetch all playlists  | -                                                                                                                       |
| api/playlists        | post   | Add new playlist     | {"title":"playlist1","songsId":["5fb92dc780c6100b941c3be9"],"createdBy":"5fb9056730e7f823e8e7936d"}                     |
| api/playlists/id/:id | get    | Fetch playlist by ID | {id: "5fb92dbc80c6100b941c3be8"}                                                                                        |