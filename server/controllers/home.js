const Task = require("../models/Task");

module.exports = {
  addTask: async (req, res) => {
    try {
      await Task.create({
        text: req.body.text,
        category: req.body.category,
        inProgress: req.body.inProgress,
      });
      console.log('added')
      res.status(200).send('Added new task!');
    } catch (err) {
      console.log(err)
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

