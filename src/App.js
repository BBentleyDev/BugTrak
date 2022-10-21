import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'doctors appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'massage appointment',
        day: 'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'dentist appointment',
        day: 'Feb 7th at 2:30pm',
        reminder: true,
    },
])

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
      <Header title='BugTrak' />
     {tasks.length > 0 ? 
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
     : 'No Tasks to show'}
    </div>
  );
}

export default App;
