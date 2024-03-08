const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const authrouter = require("./routes/authRoutes");
const taskrouter = require("./routes/taskRoutes");

require("dotenv").config({ path: "src/.env" });

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected gracefully!!"))
  .catch((err) => console.error(err));
  
app.use(express.json());
app.use(cors())

app.use("/api/auth",authrouter);
app.use("/api/tasks",taskrouter);

app.get("/", (req, res) => {
  res.send("Welcome to backend!!");
});

app.listen(PORT, () => {
  console.log("Running on http://localhost:" + PORT);
});
