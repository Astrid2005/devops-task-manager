// Trigger CI run on feature branch
console.log("Testing CI on feature branch");
// CI test change
console.log("Testing CI with a Pull Request");
const express = require('express');
const app = express();
app.use(express.json());

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
  res.json({ message: "Task Manager API running (Lab2)" });
});

app.use('/tasks', tasksRouter);

app.listen(3000, () => console.log("API running on port 3000"));

// Export the app for testing
// Export the app for testing
const PORT = process.env.PORT || 3001;  // Default to 3001 instead of 3000

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`API running on port ${PORT}`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${PORT} is busy, trying ${PORT + 1}`);
            app.listen(PORT + 1, () => {
                console.log(`API running on port ${PORT + 1}`);
            });
        } else {
            console.error('Server error:', err);
        }
    });
}

module.exports = app;
// re-trigger CI
