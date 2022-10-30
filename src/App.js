import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const API_URL = 'http://localhost:3001'
  
  //Get Tasks
  const getTasks = async () => {
    try {
      const tasks = await fetch(`${API_URL}`)
      let taskList = await tasks.json()
      setTasks(taskList)
      console.log(taskList)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect( () => {
    getTasks();
  }, []);

  //Add Task
  const addTask = async (task) => {
    try {
      const newTask = {...task}
      await fetch(`${API_URL}/addTask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
      setTasks([...tasks, newTask])
    } catch (err) {
      console.log(err)
    }
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} 
    : task))
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        title='BugTrak' 
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? 
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
     : 'No Tasks to show'}
    </div>
  );
}

export default App;
