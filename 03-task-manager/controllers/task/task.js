"use strict";

const Task = require("../../models/Task");

const getTask = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

const createTask = async (req, res) => {
  /*  let inputData = req.body; */
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error,
    });
  }
  // res.status(201).json({ task }); -----> task undefined for->(await)
};

const getSingleTask = async (req, res) => {
  try {
    // get id from url
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    console.log(task);
    if (!task) {
      //return next(createCustomError(`No task with id : ${taskID}`, 404))
      //! NOTA: en los errores usar siempre return
      return res.status(404).send({
        message: `No task with id : ${taskID}`,
      });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(404).send({
      message: error,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).send({
        message: `No update task with id : ${taskID}`,
      });
      //return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task });

  } catch (error) {
    return res.status(404).send({
      message: error,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).send({
        message: `No delete task with id : ${taskID}`,
      });
      //return next(createCustomError(`No task with id : ${taskID}`, 404));
    }
    res.status(200).json({ task });
  } catch (error) {
    return res.status(404).send({
      message: error,
    });
  }

  
};

module.exports = {
  getTask,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
