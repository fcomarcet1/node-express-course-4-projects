console.log("Task Manager App");
("use strict");

require("dotenv").config();
const express = require("express");
const app = express();

// setup static and middleware for static resources
app.use(express.static("./public"));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// test route
app.get("/test", function (req, res) {
  res.send("hello world");
});

// middlewares

// rewrite routes

// http server
const port = process.env.APP_PORT || 5000;
const start = async () => {
  try {
    // connect DB
    
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
