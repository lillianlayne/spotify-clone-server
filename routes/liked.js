const express = require('express');
const router = express.Router();

const likedCtrl = require('../controllers/likedList');

// relative to: /user

// add to user liked lists
router.post("/:id/songs", likedCtrl.addSong);
router.post("/:id/albums", likedCtrl.addAlbum);
router.post("/:id/artists", likedCtrl.addArtist);
router.delete("/:id/albums", likedCtrl.deleteAlbum);
router.delete("/:id/songs", likedCtrl.deleteSong);
router.delete("/:id/artists", likedCtrl.deleteArtist);


module.exports = router