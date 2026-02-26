// Trigger CI run on feature branch
console.log("Testing CI on feature branch");
// CI test change
console.log("Testing CI with a Pull Request");
const express = require('express');
const app = express();
app.use(express.json());

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
  res.json({ message: "Welcome from MAIN branch" });
  res.json({ message: "Task Manager API running (Lab2)" });
});

app.use('/tasks', tasksRouter);

app.listen(3000, () => console.log("API running on port 3000"));