'use strict';

const express = require('express');
const cleanBody = require('../middlewares/cleanBody');
const router = express.Router();
const {
    getTask,
    getSingleTask, 
    createTask, 
    updateTask, 
    deleteTask
} = require('../controllers/task/task');


// Route list
/* router.route('/').get(getTask).post(createTask); 
   router.route('/:id').get(getSingleTask).delete(deleteTask).put(updateTask);
*/

router.get('/',cleanBody, getTask);
router.post('/',cleanBody, createTask);
router.get('/:id',cleanBody, getSingleTask);
router.put('/:id',cleanBody, updateTask);
router.delete('/:id',cleanBody, deleteTask);


module.exports = router;
