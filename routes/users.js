const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');
const likedCtrl = require('../controllers/likedList');

router.get("/", userCtrl.index);

// user CREATE ROUTE
router.post("/", userCtrl.create);

// user SHOW ROUTE
router.get("/:id", userCtrl.show);

// user DELETE ROUTE
router.delete("/:id", userCtrl.delete);

// user UPDATE ROUTE
router.put("/:id", userCtrl.update);

router.post("/:id/songs", likedCtrl.addSong);
router.post("/:id/albums", likedCtrl.addAlbum);
router.post("/:id/artists", likedCtrl.addArtist);
router.delete("/:id/albums", likedCtrl.deleteAlbum);


module.exports = router
