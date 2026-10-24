export const PRIORITY_ORDER = {
  high: 0,
  medium: 1,
  low: 2,
}

export function getLocalDateString(now = new Date()) {
  const localTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  return localTime.toISOString().slice(0, 10)
}

function compareDateStrings(a, b) {
  if (!a && !b) return 0
  if (!a) return 1
  if (!b) return -1
  return a.localeCompare(b)
}

function sortByDateThenPriority(tasks) {
  return [...tasks].sort((first, second) => {
    const dateComparison = compareDateStrings(first.dueDate, second.dueDate)
    if (dateComparison !== 0) {
      return dateComparison
    }

    return PRIORITY_ORDER[first.priority] - PRIORITY_ORDER[second.priority]
  })
}

export function getTasksByView(tasks, view, now = new Date()) {
  const today = getLocalDateString(now)

  if (view === 'completed') {
    return sortByDateThenPriority(tasks.filter((task) => task.completed))
  }

  if (view === 'today') {
    return sortByDateThenPriority(
      tasks.filter((task) => !task.completed && task.dueDate === today),
    )
  }

  if (view === 'upcoming') {
    return sortByDateThenPriority(
      tasks.filter((task) => !task.completed && task.dueDate > today),
    )
  }

  if (view === 'progress') {
    return []
  }

  return sortByDateThenPriority(tasks.filter((task) => !task.completed))
}

export function getProgressSummary(tasks, now = new Date()) {
  const total = tasks.length
  const completed = tasks.filter((task) => task.completed).length
  const today = getLocalDateString(now)
  const dueToday = tasks.filter(
    (task) => !task.completed && task.dueDate === today,
  ).length
  const upcoming = tasks.filter(
    (task) => !task.completed && task.dueDate > today,
  ).length

  return {
    total,
    completed,
    open: total - completed,
    dueToday,
    upcoming,
    completionRate: total === 0 ? 0 : Math.round((completed / total) * 100),
  }
}
