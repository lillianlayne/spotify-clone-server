const {Playlist, User} = require('../models');

const showPlaylists = async (req, res) => {
  const user = await User.findById(req.params.id).populate('playlists');
  
  try {
    res.json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}


// const createPlaylist = async (req, res) => {
//   const user = await User.find(req.params.id);

//   try {
//     user.playlists.push(req.body.playlistId)
//   } catch (error) {
//     res.status(400).json(error)
//   }
// }

module.exports = {
  showPlaylists,
}