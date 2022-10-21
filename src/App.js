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
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header title='BugTrak' />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
