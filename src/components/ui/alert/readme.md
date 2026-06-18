# Alert Component

A reusable, scalable, and accessible Alert component built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Lucide React**.

---

## Features

- Multiple severity levels (`success`, `info`, `warning`, `error`)
- Multiple visual variants (`subtle`, `solid`, `outline`)
- Optional dismiss button
- Dynamic styling system
- Accessibility support (`role="alert"`, `aria-label`)
- Theme-token architecture
- Configuration-based, scalable design

---

## Installation

```bash
npm install lucide-react
```

---

## File Structure

```
alert/
├── Alert.tsx
└── README.md
```

---

## Import

```tsx
import Alert from "@/components/ui/alert/Alert";
```

---

## Props

```ts
interface AlertProps {
  severity?: AlertSeverity;   // "success" | "info" | "warning" | "error"
  variant?: AlertVariant;     // "subtle" | "solid" | "outline"
  title: string;
  description: string;
  onClose?: () => void;
}
```

---

## Severities

| Severity  | Icon           |
|-----------|----------------|
| `success` | `CheckCircle2` |
| `info`    | `Info`         |
| `warning` | `AlertTriangle`|
| `error`   | `XCircle`      |

---

## Variants

| Variant   | Description                                      |
|-----------|--------------------------------------------------|
| `subtle`  | Soft background, dashboard-friendly, minimal attention grab |
| `solid`   | Strong emphasis, filled backgrounds, high visibility |
| `outline` | Transparent background, colored border, minimal modern UI |

---

## Usage

### Single Alert

```tsx
<Alert
  severity="success"
  variant="subtle"
  title="Payment Successful"
  description="Your subscription has been activated."
/>
```

### Multiple Alerts

```tsx
<div className="flex flex-col gap-4">
  <Alert
    severity="error"
    variant="subtle"
    title="Storage Limit"
    description="Your workspace is currently at 84% capacity limit."
    onClose={() => handleClose("error")}
  />
  <Alert
    severity="warning"
    variant="outline"
    title="Security Warning"
    description="Your password will expire in 3 days."
    onClose={() => handleClose("warning")}
  />
  <Alert
    severity="info"
    variant="solid"
    title="New Update Available"
    description="Version 2.1 is ready for installation."
    onClose={() => handleClose("info")}
  />
  <Alert
    severity="success"
    variant="subtle"
    title="Backup Completed"
    description="Your files were backed up successfully."
    onClose={() => handleClose("success")}
  />
</div>
```

Each alert is fully isolated — state updates remain independent, making this structure ideal for dashboard integration.

---

## Architecture

### `severityConfig`

Maps each severity to its corresponding Lucide icon, centralizing configuration logic instead of using repetitive conditionals.

```ts
const severityConfig = {
  success: { Icon: CheckCircle2 },
  info:    { Icon: Info },
  warning: { Icon: AlertTriangle },
  error:   { Icon: XCircle },
};
```

### `variantStyles`

Resolves the full visual appearance via object lookups, keeping the code clean and easy to extend.

### `secondaryTextStyles`

Separates description typography from container styling to ensure consistent contrast across themes.

---

## Layout Details

| Element        | Classes Used              | Purpose                                      |
|----------------|---------------------------|----------------------------------------------|
| Container      | `flex items-center gap-3 rounded-lg shadow-sm transition-all` | Structured alignment with smooth interaction |
| Icon wrapper   | `shrink-0`                | Prevents icon compression in flex layouts    |
| Text section   | `flex-1 min-w-0`          | Safe text overflow handling in flex contexts |
| Close button   | Conditional `{onClose && ...}` | Supports both static and dismissible alerts  |

---

## Design System

The component uses semantic Tailwind tokens rather than hardcoded colors:

- `bg-success`, `bg-danger`
- `border-warning`
- `text-fg-inverse`
- `focus-ring-visible`

This ensures compatibility with light/dark mode and centralized theming.

---

## Accessibility

- `role="alert"` for screen reader announcements
- `aria-label` support on the close button