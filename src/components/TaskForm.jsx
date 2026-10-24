import { useState } from 'react'
import { getLocalDateString } from '../utils/taskUtils'

const defaultTaskState = {
  title: '',
  category: 'General',
  priority: 'medium',
  dueDate: getLocalDateString(),
}

function TaskForm({ onCreateTask }) {
  const [formState, setFormState] = useState(defaultTaskState)

  function handleChange(event) {
    const { name, value } = event.target
    setFormState((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    onCreateTask({
      ...formState,
      title: formState.title.trim(),
    })

    setFormState((current) => ({
      ...current,
      title: '',
    }))
  }

  return (
    <section aria-labelledby="task-form-heading" className="panel">
      <h2 id="task-form-heading">Add task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <label htmlFor="task-title">Task title</label>
        <input
          id="task-title"
          name="title"
          type="text"
          value={formState.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="task-category">Category</label>
        <input
          id="task-category"
          name="category"
          type="text"
          value={formState.category}
          onChange={handleChange}
          required
        />

        <label htmlFor="task-priority">Priority</label>
        <select
          id="task-priority"
          name="priority"
          value={formState.priority}
          onChange={handleChange}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <label htmlFor="task-due-date">Due date</label>
        <input
          id="task-due-date"
          name="dueDate"
          type="date"
          value={formState.dueDate}
          onChange={handleChange}
          required
        />

        <button type="submit">Create task</button>
      </form>
    </section>
  )
}

export default TaskForm
