console.log("Task Manager App");
("use strict");

require("dotenv").config();
const express = require("express");
const nodeinfo = require('nodejs-info');
const connectMongoDB = require('./database/connect');
const mongoose = require('mongoose');

const app = express();

// setup static and middleware for static resources
app.use(express.static("./public"));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// test route
app.get("/ping", (req, res) => {
    return res.send({
        status: "success",
        error: false,
        message: "Server is healthy",
    });
});

// middlewares

// rewrite routes

// server info
app.get("/server-info", (req, res) => {
    res.send(nodeinfo(req));
});


// http server
const port = process.env.APP_PORT || 5000;
const start = async () => {
  try {
    // connect DB
    await connectMongoDB(process.env.MONGODB_CLOUD_URI);
    console.log(`Mongoose version: ${mongoose.version}.`);
    console.log(`Database connection successful at MongoDB Cloud: mongodb+srv://${process.env.MONGODB_CLOUD_USER}:****%2a@cluster0.mpcxw.mongodb.net/${process.env.MONGODB_CLOUD_DATABASE}`);
    
    app.listen(process.env.APP_PORT, () => {
      console.log(
        `Server is ready on : ${process.env.APP_HOSTNAME}:${process.env.APP_PORT} is listening on port ${process.env.APP_PORT}....`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start();
