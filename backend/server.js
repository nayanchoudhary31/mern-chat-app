const express = require("express");
const { chats } = require("./data/chat");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, resp) => {
  resp.send("API is running");
});

app.get("/api/chat", (req, resp) => {
  resp.send(chats);
});

app.get("/api/chat/:id", (req, resp) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  resp.send(singleChat);
});
app.listen(PORT, () => {
  console.log(`Server is up and running on port...${PORT}`);
});
