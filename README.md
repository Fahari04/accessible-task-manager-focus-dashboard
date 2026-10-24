# FocusAble — Accessible Task Manager & Focus Dashboard

FocusAble is a portfolio project . It demonstrates accessible interaction design in a practical productivity tool.

Repository: https://github.com/Fahari04/accessible-task-manager-focus-dashboard  
Live demo: `LIVE_DEMO_URL`

## Project purpose

FocusAble helps people plan tasks and maintain concentration while preserving inclusive access for keyboard, low-vision, and high-contrast usage patterns.

## Target users

- Students managing course and application deadlines
- Knowledge workers balancing short and long horizon tasks
- Users needing stronger visual affordances, larger text, and keyboard-first navigation

## HCI rationale

The app uses progressive disclosure and clear information hierarchy:

- **Views** (`Today`, `Upcoming`, `Completed`, `Progress`) reduce cognitive load
- **Status communication** always uses color + text (`Pending` / `Complete`)
- **Focus timer** supports time-boxed work sessions
- **Local persistence** keeps interaction stable between sessions without account friction

## Accessibility decisions

- Skip link for immediate keyboard jump to main content
- Semantic landmarks (`header`, `nav`, `main`, `aside`, `footer`)
- Keyboard-visible focus styles with `:focus-visible`
- Icon-only display controls include explicit accessible labels
- High-contrast mode
- Large-text mode
- Responsive mobile navigation with an expandable view menu

## Architecture

```text
src/
  App.jsx
  components/
    FocusTimer.jsx
    ProgressPanel.jsx
    TaskForm.jsx
    TaskList.jsx
    ViewTabs.jsx
  utils/
    taskUtils.js
```

## Local development

```bash
npm install
npm run dev
```

## Build, test, and validation

```bash
npm run lint
npm test
npm run build
```

`npm test` runs a lightweight Node test for task filtering/progress logic.

## Deployment

GitHub Pages workflow is included at `.github/workflows/deploy.yml`.

### Steps

1. Push to `main`
2. In GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions**
3. Wait for workflow completion
4. Replace `LIVE_DEMO_URL` placeholders in docs with the published URL

## Notes

- Data is intentionally local-only via `localStorage`
- No external backend is required for portfolio review
