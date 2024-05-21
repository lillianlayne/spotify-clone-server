const { Playlist, User } = require("../models");

const createPlaylist = async (req, res) => {
  
  const { name, description } = req.body;
  console.log(name, description);

  try {
    const user = await User.findById(req.params.id);

    const newPlaylist = await Playlist.create({
      name,
      description,
      owner: user._id,
    });

    await newPlaylist.save();
    user.playlists.push(newPlaylist._id);
    await user.save();
    console.log(newPlaylist);
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const showPlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.listId);

    res.json(playlist);
  } catch (error) {
    res.status(400).json(error);
  }
};

const addToPlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    playlist.songs.push(req.body);
    await playlist.save();
    res.json(playlist)
  } catch (error) {
    res.status(400).json(error);
  }
};

const deletePlaylist = async (req, res) => {
  const user = await User.findById(req.params.id);
  const itemToRemove = req.body.id
  
  try {
    const playlist = await Playlist.findByIdAndDelete(itemToRemove)
  
    await user.save()
    res.json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}
module.exports = {
  create: createPlaylist,
  show: showPlaylist,
  add: addToPlaylist,
  delete: deletePlaylist
};
