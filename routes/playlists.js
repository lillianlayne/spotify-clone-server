const express = require('express');
const router = express.Router();

const playlistCtrl = require('../controllers/playlists')


// route base: /user
router.post("/:id/playlist", playlistCtrl.create)
router.post("/:id/playlist/:listId/add", playlistCtrl.add)
router.get("/playlist/:listId", playlistCtrl.show)



module.exports = router