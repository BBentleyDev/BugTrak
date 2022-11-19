const Task = require("../models/Task");
const User = require("../models/User");

module.exports = {
  addTask: async (req, res) => {
    try {
      const task = await Task.create({
        text: req.body.text,
        user: req.user.id,
      });
      console.log('added')
      res.status(200).json(task);
    } catch (err) {
      console.log(err)
      res.status(400).send('Adding new task failed');
    }
  },
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find({ user: req.user.id })
      res.json(tasks)
    } catch (err) {
      console.log(err);
    }
  },
  deleteTask: async (req, res) => {
    const task = await Task.findById(req.params.id)
    try {
      
      //Check for user
      if (!req.user) {
        res.status(401)
        throw new Error('User not found')
      }
      
      //Make sure logged in user matches creator of goal
      if(task.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
      }
      
      // Delete post from db
      await task.remove()

      console.log("Deleted from DB");
      res.status(200).send({ id: req.params.id });
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
  updateTask: async (req, res) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
      res.status(400)
      throw new Error ('Goal not found')
    }

    //Check for user
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }

    //Make sure logged in user matches creator of goal
    if(task.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }

    await Task.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    })
  }
};

//Routes from video


