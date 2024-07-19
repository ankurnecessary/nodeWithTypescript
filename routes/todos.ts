import { Router } from 'express';
import { type Todo } from '../models/todo';

const todos: Todo[] = [];

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json(todos);
});


export default router;
