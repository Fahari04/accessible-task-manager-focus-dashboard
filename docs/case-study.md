# FocusAble Case Study (8-Page Portfolio PDF Source)

> Candidate: **Fahari Alam Rashed**  
> Program: **M.Sc. Human-Computer Interaction — University of Siegen**  
> Repository: https://github.com/Fahari04/accessible-task-manager-focus-dashboard  
> Live Demo: `LIVE_DEMO_URL`

## Export instructions (keep PDF < 9MB)

1. Open this file (or `docs/case-study.html`) in a browser/editor preview.
2. Export/Print to PDF with:
   - A4 portrait
   - 100% scale
   - Background graphics enabled
3. Keep only 2–4 optimized PNG/JPEG screenshots.
4. Compress images before insertion (target < 250 KB each).
5. Verify final PDF size is below 9 MB before submission.

---

## Page 1 — Title Page

**FocusAble: Accessible Task Manager & Focus Dashboard**  
Fahari Alam Rashed  
M.Sc. Human-Computer Interaction Portfolio Submission  
University of Siegen  
Date: _(insert submission date)_

Suggested layout:
- Full-width title block
- Short one-sentence subtitle: “Designing inclusive productivity for keyboard and low-vision users.”
- Footer with repo URL and `LIVE_DEMO_URL`

---

## Page 2 — Problem Statement and HCI Focus

### Problem statement
General-purpose productivity apps often under-serve users who rely on keyboard navigation, high contrast, and larger typography. Core actions can be hidden behind icon-only controls without labels, low-contrast status chips, and dense mobile layouts.

### HCI focus
FocusAble addresses this gap through:
- Accessibility-first interaction structure
- Reduced cognitive load via clear task views
- Consistent state feedback and low-friction data persistence

### Success criteria
- Complete keyboard operability for critical interactions
- Explicit, non-color-only status communication
- Functional responsiveness on mobile viewports

---

## Page 3 — Target Users and Design Principles

### Target users
1. Students balancing assignment and application deadlines  
2. Early-career professionals managing multi-priority tasks  
3. Users with low-vision or contrast sensitivity needs

### Design principles
- **Perceivable:** large text mode and high-contrast mode
- **Operable:** skip link, focus-visible outlines, semantic landmarks
- **Understandable:** simple labels, explicit status text, clear due dates
- **Robust:** localStorage persistence and predictable component architecture

---

## Page 4 — Wireframes and Interaction Flow

Reference: `docs/wireframes.md`

### Interaction flow summary
1. User opens dashboard and optionally activates accessibility display modes.
2. User adds a task with title, category, priority, and due date.
3. User switches between Today / Upcoming / Completed / Progress views.
4. User marks tasks complete/incomplete and observes state + metrics update.
5. User starts/pauses/resets focus timer during work block.

Include one annotated wireframe per major state:
- Desktop dashboard
- Mobile navigation expanded
- Progress-focused view

---

## Page 5 — Visual Design System

### Core visual tokens
- Neutral background with card-based content grouping
- Emphasis blue for focus/active states
- Distinct status chips for Pending and Complete, each with text

### Typography and spacing
- Default readable sans-serif stack
- Large-text mode scales base UI for low-vision accessibility
- Consistent spacing rhythm using compact card/panel structure

### Accessibility cues
- Strong focus ring (`:focus-visible`)
- Explicit labels for icon-only controls
- Landmark-based page segmentation for assistive technology

---

## Page 6 — Technical Implementation

### Stack
- React + Vite
- LocalStorage for client-side persistence
- Modular component structure under `src/components`

### Key implementation decisions
- Utility layer (`taskUtils.js`) centralizes filtering and progress calculations
- View tab system controls Today/Upcoming/Completed/Progress rendering
- Focus timer uses interval-based state updates with start/pause/reset controls

### Concise code snippet

```jsx
const visibleTasks = useMemo(() => getTasksByView(tasks, activeView), [tasks, activeView])
const progressSummary = useMemo(() => getProgressSummary(tasks), [tasks])

function handleToggleTask(taskId) {
  setTasks((current) =>
    current.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    ),
  )
}
```

---

## Page 7 — Evaluation Approach and Reflection

### Evaluation approach
- Heuristic walkthrough against Nielsen principles
- Keyboard-only pass on all primary interactions
- Responsive behavior checks on narrow mobile widths
- Build/test validation (`npm test`, `npm run build`)

### Reflection
FocusAble demonstrates that accessibility features can be integrated as first-class product behavior rather than post-hoc patches. The project prioritizes practical inclusivity while remaining lightweight enough for quick portfolio review and deployment.

### Next improvements
- User-defined focus session lengths
- Optional recurring tasks
- Lightweight export/import for local task portability

---

## Page 8 — Live Links and Repository

### Repository
https://github.com/Fahari04/accessible-task-manager-focus-dashboard

### Live demo
`LIVE_DEMO_URL`

### Suggested final section layout
- QR code to repository
- QR code to live demo
- One-line summary of learning outcomes
- Contact block for application review context
