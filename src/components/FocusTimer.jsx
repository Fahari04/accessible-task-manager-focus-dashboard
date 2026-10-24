import { useEffect, useState } from 'react'

const DEFAULT_DURATION = 25 * 60

function formatTime(timeInSeconds) {
  const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0')
  const seconds = String(timeInSeconds % 60).padStart(2, '0')
  return `${minutes}:${seconds}`
}

function FocusTimer() {
  const [isRunning, setIsRunning] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_DURATION)

  useEffect(() => {
    if (!isRunning || secondsLeft === 0) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setSecondsLeft((current) => current - 1)
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [isRunning, secondsLeft])

  useEffect(() => {
    if (secondsLeft === 0) {
      setIsRunning(false)
    }
  }, [secondsLeft])

  function handleStartPause() {
    setIsRunning((current) => !current)
  }

  function handleReset() {
    setIsRunning(false)
    setSecondsLeft(DEFAULT_DURATION)
  }

  return (
    <section aria-labelledby="focus-timer-heading" className="panel">
      <h2 id="focus-timer-heading">Focus timer</h2>
      <p className="timer-display" aria-live="polite">
        {formatTime(secondsLeft)}
      </p>
      <p>{isRunning ? 'Timer running' : 'Timer paused'}</p>
      <div className="timer-controls">
        <button type="button" onClick={handleStartPause}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  )
}

export default FocusTimer
