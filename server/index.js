const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const threads = require("./routes/thread");
const users = require("./routes/user");
const posts = require("./routes/post");
const comments = require("./routes/comment");
const sections = require("./routes/section");

const MONGO_DB_URL = process.env.MONGO_DB_URL;

// connect to mongo db
mongoose.connect(MONGO_DB_URL);

const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
db.once('open', () => {
  console.log("Connected to MongoDB");
});

// express config
const app = express();
app.use(express.json());
app.use(cors());
app.use("/thread", threads );
app.use("/user", users);
app.use("/post", posts);
app.use("/comment", comments);
app.use("/section", sections);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

// start the server on port
const PORT = 3000; // express server port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
