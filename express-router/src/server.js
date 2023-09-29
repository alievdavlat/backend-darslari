import express from 'express'
import { tasksRouter } from './router/tasks.router.js';




const app = express();
app.use('/tasks', tasksRouter)

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});

