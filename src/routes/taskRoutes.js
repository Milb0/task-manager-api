const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const { body } = require('express-validator');

const taskRules = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('dueDate').notEmpty().withMessage('Due date is required')
];

router.use(protect);

router.get('/', getTasks);
router.post('/', taskRules, createTask);
router.put('/:id', taskRules, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;