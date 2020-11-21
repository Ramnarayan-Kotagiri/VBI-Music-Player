const {
    authJwt
} = require("../middleware");
const controller = require("../controllers/playlist.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // app.get("/api/songs", [authJwt.verifyToken], controller.allSongs);
    app.get("/api/playlists", controller.getAllPlaylists);

};