const Song = require("../models/song.model")
var ObjectId = require('mongoose').Types.ObjectId; 

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
            duration: req.body.duration
        }).save();

        return res.status(200).send("Song Added");
    } catch (error) {
        return res.status(400).send("Error adding songs");
    }
};

exports.getSongsById = async (req, res) => {
    let getSong = await Song.find({"_id":new ObjectId(req.params.song)});
    if (getSong) {
        return res.status(200).send(getSong);
    } else {
        return res.status(400).send("Error retreiving song");
    }
};