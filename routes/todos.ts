import { Router } from 'express';
import { type Todo } from '../models/todo';

let todos: Todo[] = [];

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

// To edit a todo
router.put('/todo/:todoId', (req, res, next) => {
  const tid = req.params.todoId;

  // We could have used findIndex() instead of find(). This is also an option
  const todo: Todo | undefined = todos?.find((item) => item.id === tid);

  if (todo === undefined || todo === null) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  const { text } = req.body;

  if (typeof text !== 'string') {
    return res.status(400).json({ message: 'Invalid request body' });
  }

  todo.text = text;
  res.status(200).json({ message: 'Todo updated successfully.', todo });
});

// To delete a todo
router.delete('/todo/:todoId', (req, res, next) => {
  todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
  res.status(201).json({ message: 'Todo deleted sucessfully.', todos });
});

export default router;
