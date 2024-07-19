import express from 'express';
import todosRouter from './routes/todos';

const app = express();

app.use(todosRouter);

app.listen(5000);
