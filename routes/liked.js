const express = require('express');
const router = express.Router();

const likedCtrl = require('../controllers/likedList');

router.post('/likedsongs', likedCtrl.addSong);
router.post('/likedalbums', likedCtrl.addAlbum);
router.post('/likedartists', likedCtrl.addArtist);

module.exports = router