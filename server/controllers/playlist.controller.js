const Playlist = require("../models/playlist.model")
var ObjectId = require('mongoose').Types.ObjectId; 

exports.getAllPlaylists = async (req, res) => {
    let getPlaylists = await Playlist.find();
    if (getPlaylists) {
        return res.status(200).send(getPlaylists);
    } else {
        return res.status(400).send("Error retreiving songs");
    }
};

exports.AddPlaylist = async (req, res) => {
    let body = req.body
    try {
        await Playlist({
            title: req.body.title,
            songsId: req.body.songsId,
            createdBy: req.body.createdBy,
        }).save();

        return res.status(200).send("Playlist Added");
    } catch (error) {
        return res.status(400).send("Error adding Playlist");
    }
};

exports.getPlaylistsForUser = async (req, res) => {
    let Playlists = await Playlist.find({createdBy : new ObjectId(req.params.user)});
    if (Playlists) {
        return res.status(200).send(Playlists);
    } else {
        return res.status(400).send("Error retreiving Playlist");
    }
};

exports.getPlaylistsById = async (req, res) => {
    let PlaylistDetail = await Playlist.find({"_id" : new ObjectId(req.params.id)});
    if (PlaylistDetail) {
        return res.status(200).send(PlaylistDetail);
    } else {
        return res.status(400).send("Error retreiving Playlist");
    }
};