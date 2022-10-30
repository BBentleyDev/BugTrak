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
  deleteTask: async (req, res) => {
    try {
      // Delete post from db
      await Task.remove({ _id: req.params.id });
      console.log("Deleted from DB");
      res.status(200).send('deleted task!');
    } catch (err) {
      console.log(err);
      res.status(400).send('delete task failed');
    }
  },
  toggleProgress: async (req, res) => {
    try {
      await Task.findOneAndUpdate({ _id: req.params.id },
        [{ $set: {
            inProgress: { $eq: [false, "$inProgress"] },
          }
        }]
      );
      console.log("Status changed");
      res.status(200).send('Progress updated');
    } catch (err) {
      res.status(400).send('update failed');
      console.log(err)
    }
  },
};

