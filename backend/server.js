const express = require("express");
const { chats } = require("./data/chat");
const connectDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
require("dotenv").config();
const app = express();
connectDb();
app.use(express.json()); //To accept JSON Data

const PORT = process.env.PORT;

app.get("/", (req, resp) => {
  resp.send("API is running");
});

app.use("/api/user/", userRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is up and running on port...${PORT}`);
});
