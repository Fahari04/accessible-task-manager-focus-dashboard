# FocusAble Wireframes (Text/ASCII)

## 1) Desktop dashboard layout

```text
+--------------------------------------------------------------------------------+
| FocusAble                                    [◑ high contrast] [A+ large text] |
| Views: [Today] [Upcoming] [Completed] [Progress]                               |
+---------------------------------------------+----------------------------------+
| Add Task                                    | Progress Overview                |
| [Title___________________________]          | [Total] [Completed] [Open]       |
| [Category________________________]          | [Due Today] [Upcoming] [Rate]    |
| [Priority v] [Due Date_____] [Create Task] |----------------------------------|
|---------------------------------------------| Focus Timer                       |
| Task List                                   | 25:00                            |
| - Task card + status badge + toggle         | [Start/Pause] [Reset]            |
+---------------------------------------------+----------------------------------+
```

Caption: Two-column structure supports simultaneous planning (left) and focus feedback (right).

## 2) Mobile navigation behavior

```text
+----------------------------------+
| FocusAble             [◑] [A+]   |
| [Views ▼]                        |
|  Today     Upcoming              |
|  Completed Progress              |
+----------------------------------+
| Add Task panel                   |
| Task List panel                  |
| Progress panel                   |
| Focus timer panel                |
+----------------------------------+
```

Caption: View menu collapses into a toggle button for compact, touch-friendly navigation.

## 3) Task state communication

```text
[Task: Submit portfolio draft]
Category: Study  Priority: High  Due: 2026-10-24
Status: [Pending]   (button: Mark complete)

[Task: Prepare references]
Category: Admin  Priority: Medium  Due: 2026-10-23
Status: [Complete]  (button: Mark incomplete)
```

Caption: Status always combines color and explicit text labels.
