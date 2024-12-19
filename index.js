require("dotenv").config();
const express = require("express");
const app = express();
require('./db');
const cors = require("cors");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
require('dotenv').config();
// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
