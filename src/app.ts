import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import todosRouter from './routes/todos';
import bodyParser from 'body-parser';

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json());

// To  handle CORS error in the browser
app.use((req: Request, res: Response, next: NextFunction): void => {
  // We can set these headers conditionally, if we want our APIs to be accessed from multiple domains.
  // But right now we are entertaining requests from any domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(todosRouter);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
