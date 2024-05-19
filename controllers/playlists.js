const {Playlist, User} = require('../models');

const playlist = async (req, res) => {
  
  try {
    const {title, description} = req.body;
    const user = await User.findById(req.params._id);

    const playlist = await Playlist.create({
      title, 
      description, 
      owner: [user._id]
    });
    
    await playlist.save();
    user.playlists.push(playlist);
    await user.save()

    // const newPlaylist = new Playlist({
    //   title, 
    //   owner: [user._id], 
    //   description, 
    // });

    // const playlist = await newPlaylist.save();
    // user.playlists.push(playlist);
    // await user.save();

    res.json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}

const createPlaylist = async (req, res) => {
  const {userId} = req.params.id
  const {title, description} = req.body

  try {
    const user = await User.findById(req.params.id)

    const newPlaylist = await Playlist.create({
      title, description, owner: user._id
    })

    user.playlists.push(newPlaylist._id)
    res.json(user)
  } catch (error) {
    
  }
}

module.exports = {
  create: createPlaylist
}