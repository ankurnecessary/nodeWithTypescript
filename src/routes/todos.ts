import { Router } from 'express';
import { type Todo } from '../models/todo';

interface RequestBody { text: string; }
interface RequestParams { todoId: string; }

let todos: Todo[] = [];

const router = Router();

// To fetch all the todos
router.get('/', (req, res, next) => {
  res.status(200).json({ todos });
});

// To save a todo
router.post('/todo', (req, res, next) => {
  /*
    While making POST request from the browser we should make sure that the `JSON.stringify()` should be used before sending the data in th `body` property of `fetch()`. Also the `content-type` should be `application/json` in request headers.
  */
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text
  };

  todos.push(newTodo);
  res
    .status(201)
    .json({ message: 'Todo saved sucessfully', todo: newTodo, todos });
});

// To edit a todo
router.put('/todo/:todoId', (req, res, next) => {
  const params = req.params as RequestParams;
  const tid = params.todoId;

  // We could have used findIndex() instead of find(). This is also an option
  const todo: Todo | undefined = todos?.find((item) => item.id === tid);

  // We added both kind of if checks because of eslint setting which forced us to define both the checks instead of !todo
  if (todo === undefined || todo === null) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  const { text } = req.body as RequestBody;

  if (typeof text !== 'string') {
    return res.status(400).json({ message: 'Invalid request body' });
  }

  todo.text = text;
  res.status(200).json({ message: 'Todo updated successfully.', todo });
});

// To delete a todo
router.delete('/todo/:todoId', (req, res, next) => {
  const params = req.params as RequestParams;
  todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
  res.status(201).json({ message: 'Todo deleted sucessfully.', todos });
});

export default router;
