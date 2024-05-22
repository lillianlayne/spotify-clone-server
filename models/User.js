const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongsSchema = new Schema({
  content: String,
}, {
  timestamps: true
})

const AlbumsSchema = new Schema({
  content: String,
}, {
  timestamps: true
})

const ArtistSchema = new Schema({
  content: String,
}, {
  timestamps: true
})


const UserSchema = new Schema({
  name: String,
  email: String,
  passwordDigest: String,
  playlists: [
    {
      type: Schema.Types.ObjectId, 
      ref: "Playlist"
    }
  ], 
  likedSongs: [SongsSchema], 
  likedAlbums: [AlbumsSchema], 
  likedArtists: [ArtistSchema],
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema);

