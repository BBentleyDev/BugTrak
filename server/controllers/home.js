const Task = require("../models/Task");

module.exports = {
  getHome: (req, res) => {
    res.json({ message: 'Hello from server!' });
  },
  addTask: async (req, res) => {
    try {
      let todo = new Todo(req.body);
      await todo.save();
      // await Task.create({
      //   task: req.body.task,
      //   category: req.body.category,
      //   inProgress: req.body.inProgress,
      // });
      res.status(200).send('Added new task!');
    } catch (err) {
      res.status(400).send('Adding new task failed');
    }
  },
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find()
      res.json(tasks)
    } catch (err) {
      console.log(err);
    }
  },
};

