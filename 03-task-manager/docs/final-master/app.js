'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// static resources
app.use(express.static('./public'));
app.use(express.json());

// rewrite routes
app.use('/api/v1/tasks', tasks);

// middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>{ 
      console.log(`Server is listening on port ${port}...`)
    });
  } 
  catch (error) {
    console.log(error);
  }
};

start();
