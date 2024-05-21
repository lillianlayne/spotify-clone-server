const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema(
  {
    name: String,
    owner: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
    followers: [{
      type: Schema.Types.ObjectId, 
      ref: "User"
    }],
    songs: [{
      type: String,
    }],
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Playlist", PlaylistSchema);
