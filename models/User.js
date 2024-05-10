const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  image: String, 
  playlists: [
    {
      type: Schema.Types.ObjectId, 
      ref: "Playlist"
    }
  ]
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema);

// for postman checks
// {
//   "name": "Lillian Layne", 
//   "email": "lillian@layne.com", 
//   "password": "1234"
// }