import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Bug</label>
            <input type='text' placeholder='Add Bug' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Category</label>
            <input type='text' placeholder='Add category' value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>In Progress?</label>
            <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Save Bug' className='btn btn-block'/>
    </form>
  )
}

export default AddTask