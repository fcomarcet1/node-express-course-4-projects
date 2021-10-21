"use strict";

const getTask = (req, res) => {
  res.send(" all items from task");
};

const getSingleTask = (req, res) => {
  res.send("get single task");
};

const createTask = (req, res) => {
  let inputData = req.body;
  res.json({
    message: "create task action",
    data: inputData,
  });
};

const updateTask = (req, res) => {
  let inputParam = req.params;
  res.json({
    message: "update task action",
    data: inputParam,
  });
};

const deleteTask = (req, res) => {
  let inputParam = req.params;
  res.json({
    message: "delete task action",
    data: inputParam,
  });
};

module.exports = {
  getTask,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
