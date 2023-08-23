// chatname
// isGroupChat
// list of the users
// latest message
// groupAdmin
const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "UserModel",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.ObjectId,
      ref: "MessageModel",
    },
    groupAdmin: {
      type: mongoose.Schema.ObjectId,
      ref: "UserModel",
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("ChatModel", chatSchema);
