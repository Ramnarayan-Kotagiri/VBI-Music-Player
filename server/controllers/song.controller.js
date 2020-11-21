const Song = require("../models/song.model")

exports.getAllSongs = async (req, res) => {
    let getSongs = await Song.find();
    if (getSongs) {
        return res.status(200).send(getSongs);
    } else {
        return res.status(400).send("Error retreiving songs");
    }
};

exports.AddSong = async (req, res) => {
    let body = req.body
    try {
        await Song({
            name: req.body.name,
            artist: req.body.artist,
            duration: req.body.duration,
        }).save();

        return res.status(200).send("Song Added");
    } catch (error) {
        return res.status(400).send("Error adding songs");
    }
};