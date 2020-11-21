const Playlist = require("../models/playlist.model")

exports.getAllPlaylists = async (req, res) => {
    let getPlaylists = await Playlist.find();
    if (getPlaylists) {
        return res.status(200).send(getPlaylists);
    } else {
        return res.status(400).send("Error retreiving songs");
    }
};

