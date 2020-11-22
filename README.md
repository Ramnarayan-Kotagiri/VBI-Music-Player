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
| routes               | method   |functionality      | sample param                                                                         |
|----------------------|----------|-------------------|--------------------------------------------------------------------------------------|
| api/auth/signup      | post     | Sign up api       | {"firstName":"Amit","lastName":"gouda","email":"xyz@gmail.com","password":123456   } |
| api/auth/signin      | post     | Sign in api       |{"email":"amit@gmail.com","password":"123456"} |
| api/song/allSong     | get      | Get all songs     |  {}                                                                                    |
| api/song/createAlbum | post     | Create an album   |  {"title":"Hip Hop"}                                                                                    |
| api/playlist/create  | post     | Create a playlist |   {"name":"Winning",  "songsIdArray":["5fab6b38832b7220a4b30eb5"]}                                                                                   |
| api/playlist/all     | get      | Get all playlist  | {}                                                                                     |
| api/song/create      | post     | Add songs         |   {"title":"Chale Chalo","playTime":7010,"albumId":"5fab699d832b7220a4b30eaf","singer":"Arjit Singh"} |