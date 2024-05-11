const express = require('express');
const {User} = require('../models');

const addSong = async (req, res) => {
 try {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({error: "user not found"})
  }

  const data = req.body;
  user.likedSongs.push(data)

  await user.save()
  res.json(user)
 } catch (error) {
  res.status(400).json(error)
 }
}

const addAlbum = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({error: "user not found"})
    }
  
    const data = req.body;
    user.likedAlbums.push(data)
  
    await user.save()
    res.json(user)
   } catch (error) {
    res.status(400).json(error)
   }
}

const addArtist = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({error: "user not found"})
    }
  
    const data = req.body;
    user.likedArtists.push(data)
  
    await user.save()
    res.json(user)
   } catch (error) {
    res.status(400).json(error)
   }
}

module.exports = {
  addSong, 
  addAlbum,
  addArtist
}