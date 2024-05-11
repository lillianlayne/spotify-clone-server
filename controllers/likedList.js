const express = require('express');
const {User} = require('../models');

const addSong = async (req, res) => {
  const user = res.json(await User.create(req.body));

  try {
    user.likedSongs.push(req.body)
  } catch (error) {
    res.status(400).json(error)
  }
}

const addAlbum = async (req, res) => {
  const user = res.json(await User.create(req.body));

  try {
    user.likedAlbums.push(req.body)
  } catch (error) {
    res.status(400).json(error)
  }
}

const addArtist = async (req, res) => {
  const user = res.json(await User.create(req.body));

  try {
    user.likedArtists.push(req.body)
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  addSong, 
  addAlbum,
  addArtist
}