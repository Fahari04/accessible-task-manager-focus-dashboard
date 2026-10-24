function ProgressPanel({ progressSummary }) {
  return (
    <section aria-labelledby="progress-heading" className="panel">
      <h2 id="progress-heading">Progress overview</h2>
      <ul className="progress-grid">
        <li>
          <strong>{progressSummary.total}</strong>
          <span>Total tasks</span>
        </li>
        <li>
          <strong>{progressSummary.completed}</strong>
          <span>Completed</span>
        </li>
        <li>
          <strong>{progressSummary.open}</strong>
          <span>Open</span>
        </li>
        <li>
          <strong>{progressSummary.dueToday}</strong>
          <span>Due today</span>
        </li>
        <li>
          <strong>{progressSummary.upcoming}</strong>
          <span>Upcoming</span>
        </li>
        <li>
          <strong>{progressSummary.completionRate}%</strong>
          <span>Completion rate</span>
        </li>
      </ul>
    </section>
  )
}

export default ProgressPanel
