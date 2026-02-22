const express = require('express');
const router = express.Router();

// Données temporaires (tasks)
let tasks = [
  { id: 1, title: "Learn Git", completed: false },
  { id: 2, title: "Practice DevOps", completed: true }
];

// Route GET /tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

module.exports = router;