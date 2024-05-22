const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');
const likedCtrl = require('../controllers/likedList');

// relative to: /user

// create user profile
router.get("/", userCtrl.index);
router.post("/", userCtrl.create);
router.get("/:id", userCtrl.show);
router.delete("/:id", userCtrl.delete);
router.put("/:id", userCtrl.update);

module.exports = router
