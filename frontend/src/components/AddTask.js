import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [category, setCategory] = useState('')
    const [inProgress, setProgress] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, category, inProgress })

        setText('')
        setCategory('')
        setProgress(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input name='text' type='text' placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Category</label>
            <input name='category' type='text' placeholder='Add category' value={category} onChange={(e) => setCategory(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>In Progress?</label>
            <input name='inProgress' type='checkbox' checked={inProgress} onChange={(e) => setProgress(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Save Bug' className='btn btn-block'/>
    </form>
  )
}

export default AddTask