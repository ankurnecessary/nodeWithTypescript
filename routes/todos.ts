import { Router } from 'express';
import { type Todo } from '../models/todo';

const todos: Todo[] = [];

const router = Router();

// To fetch all the todos
router.get('/', (req, res, next) => {
  res.status(200).json(todos);
});

// To save a todo
router.post('/todo', (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text
  };

  todos.push(newTodo);
  res.status(201).json({ message: 'Todo saved sucessfully', todo: newTodo, todos });
});

export default router;
