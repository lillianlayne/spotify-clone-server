const {Playlist, User} = require('../models');

const createPlaylist = async (req, res) => {
  const {title, description} = req.body

  try {
    const user = await User.findById(req.params.id)

    const newPlaylist = await Playlist.create({
      title, description, owner: user._id
    })

    await newPlaylist.save()
    user.playlists.push(newPlaylist._id)
    await user.save()
    res.json(user)
  } catch (error) {
    res.status(400).json(error);

  }
}

const showPlaylist = async (req, res) => {
  try {
    const playlist =  await Playlist.findById(req.params.listId)


    res.json(playlist)
  } catch (error) {
    res.status(400).json(error);
    
  }
}

const addToPlaylist = async (req, res) => {
  try {
    const playlist = Playlist.findById(req.params.listId);

    playlist.songs.push(req.body)
    await playlist.save()
  } catch (error) {
    res.status(400).json(error);

  }
}

module.exports = {
  create: createPlaylist, 
  show: showPlaylist, 
  add: addToPlaylist
}