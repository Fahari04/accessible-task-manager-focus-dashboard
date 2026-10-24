function TaskList({ title, tasks, onToggleTask, emptyMessage }) {
  return (
    <section aria-labelledby="task-list-heading" className="panel">
      <h2 id="task-list-heading">{title}</h2>
      {tasks.length === 0 ? (
        <p>{emptyMessage}</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-card">
              <div>
                <h3>{task.title}</h3>
                <p>
                  <strong>Category:</strong> {task.category}
                </p>
                <p>
                  <strong>Priority:</strong> {task.priority}
                </p>
                <p>
                  <strong>Due:</strong> {task.dueDate}
                </p>
                <p>
                  <span
                    className={`status-badge ${
                      task.completed ? 'status-complete' : 'status-pending'
                    }`}
                  >
                    {task.completed ? 'Complete' : 'Pending'}
                  </span>
                </p>
              </div>
              <button type="button" onClick={() => onToggleTask(task.id)}>
                {task.completed ? 'Mark incomplete' : 'Mark complete'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default TaskList
