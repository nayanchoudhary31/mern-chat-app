const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  sender: { type: mongoose.Schema.ObjectId, ref: "UserModel" },
  content: { type: String, trim: true },
  chat: { type: mongoose.Schema.ObjectId, ref: "ChatModel" },
});

module.exports = mongoose.model("MessageModel", MessageSchema);
