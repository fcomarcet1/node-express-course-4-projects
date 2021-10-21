'use strict';

const getTask = (req, res) => {
    res.send(' all items from task');
}

const getSingleTask = (req, res) => {
    res.send('get single task');
}

const createTask = (req, res) => {
    res.send('create a new task');
}

const updateTask = (req, res) => {
    res.send('update a new task');
}

const deleteTask = (req, res) => {
    res.send('delete a new task');
}

module.exports = {
    getTask,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
};