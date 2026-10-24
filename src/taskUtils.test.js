import assert from 'node:assert/strict'
import test from 'node:test'
import { getProgressSummary, getTasksByView } from './utils/taskUtils.js'

const fixture = [
  {
    id: '1',
    title: 'Submit draft',
    category: 'Study',
    priority: 'high',
    dueDate: '2026-10-24',
    completed: false,
  },
  {
    id: '2',
    title: 'Read papers',
    category: 'Research',
    priority: 'medium',
    dueDate: '2026-10-25',
    completed: false,
  },
  {
    id: '3',
    title: 'Archive notes',
    category: 'Admin',
    priority: 'low',
    dueDate: '2026-10-23',
    completed: true,
  },
]

test('getTasksByView returns due-today tasks', () => {
  const today = getTasksByView(fixture, 'today', new Date('2026-10-24T10:00:00.000Z'))
  assert.equal(today.length, 1)
  assert.equal(today[0].id, '1')
})

test('getProgressSummary calculates completion rate', () => {
  const summary = getProgressSummary(fixture, new Date('2026-10-24T10:00:00.000Z'))
  assert.equal(summary.completed, 1)
  assert.equal(summary.total, 3)
  assert.equal(summary.completionRate, 33)
})
