'use strict';

const express = require('express');
const router = express.Router();
const {
    getTask,
    getSingleTask, 
    createTask, 
    updateTask, 
    deleteTask
} = require('../controllers/task/task');


// Route list
router.route('/')
        .get(getTask)
        .post(createTask);

router.route('/:id')
        .get(getSingleTask)
        .delete(deleteTask)
        .put(updateTask);       

module.exports = router;
