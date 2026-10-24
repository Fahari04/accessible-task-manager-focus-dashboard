import { useEffect, useMemo, useState } from 'react'
import FocusTimer from './components/FocusTimer'
import ProgressPanel from './components/ProgressPanel'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ViewTabs from './components/ViewTabs'
import { getProgressSummary, getTasksByView } from './utils/taskUtils'
import './index.css'

const TASK_STORAGE_KEY = 'focusable.tasks.v1'
const SETTINGS_STORAGE_KEY = 'focusable.settings.v1'

function createTask(task) {
  return {
    id: crypto.randomUUID(),
    title: task.title,
    category: task.category,
    priority: task.priority,
    dueDate: task.dueDate,
    completed: false,
  }
}

function App() {
  const [tasks, setTasks] = useState([])
  const [activeView, setActiveView] = useState('today')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
  })

  useEffect(() => {
    try {
      const savedTasks = window.localStorage.getItem(TASK_STORAGE_KEY)
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks))
      }
    } catch {
      setTasks([])
    }

    try {
      const savedSettings = window.localStorage.getItem(SETTINGS_STORAGE_KEY)
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings))
      }
    } catch {
      setSettings({
        highContrast: false,
        largeText: false,
      })
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  const visibleTasks = useMemo(() => getTasksByView(tasks, activeView), [tasks, activeView])
  const progressSummary = useMemo(() => getProgressSummary(tasks), [tasks])

  function handleCreateTask(task) {
    if (!task.title.trim()) {
      return
    }

    setTasks((current) => [createTask(task), ...current])
    setActiveView('today')
  }

  function handleToggleTask(taskId) {
    setTasks((current) =>
      current.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    )
  }

  function toggleSetting(settingKey) {
    setSettings((current) => ({
      ...current,
      [settingKey]: !current[settingKey],
    }))
  }

  const appClassName = [
    'app-shell',
    settings.highContrast ? 'high-contrast' : '',
    settings.largeText ? 'large-text' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={appClassName}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="header">
        <div>
          <h1>FocusAble</h1>
          <p>Accessible task manager and focus dashboard</p>
        </div>

        <div className="header-controls" aria-label="Display settings">
          <button
            type="button"
            className="icon-button"
            aria-label={
              settings.highContrast
                ? 'Disable high contrast mode'
                : 'Enable high contrast mode'
            }
            onClick={() => toggleSetting('highContrast')}
          >
            ◑
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label={settings.largeText ? 'Disable large text mode' : 'Enable large text mode'}
            onClick={() => toggleSetting('largeText')}
          >
            A+
          </button>
        </div>
      </header>

      <ViewTabs
        activeView={activeView}
        setActiveView={setActiveView}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main id="main-content" className="main-layout">
        <section>
          <TaskForm onCreateTask={handleCreateTask} />
          <TaskList
            title={activeView === 'progress' ? 'All active tasks' : `${activeView} tasks`}
            tasks={activeView === 'progress' ? getTasksByView(tasks, 'all') : visibleTasks}
            onToggleTask={handleToggleTask}
            emptyMessage="No tasks in this view yet."
          />
        </section>

        <aside>
          <ProgressPanel progressSummary={progressSummary} />
          <FocusTimer />
        </aside>
      </main>

      <footer className="footer">
        <p>Status colors always include text labels (Complete/Pending) for accessibility.</p>
      </footer>
    </div>
  )
}

export default App
