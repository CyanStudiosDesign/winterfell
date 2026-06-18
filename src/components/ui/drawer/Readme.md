# Drawer Component

A mobile-friendly, accessible bottom drawer component for Next.js with drag-to-dismiss support and smooth animations.

## Files

| File                | Description                        |
| ------------------- | ---------------------------------- |
| `Drawer.tsx`        | Root wrapper that provides context |
| `DrawerContext.tsx` | Shared state via React Context     |
| `DrawerContent.tsx` | Animated panel with drag handling  |
| `DrawerTrigger.tsx` | Click target to open the drawer    |

## Usage

```tsx
import { Drawer } from "./Drawer";
import { DrawerTrigger } from "./DrawerTrigger";
import { DrawerContent } from "./DrawerContent";

export default function Example() {
  return (
    <Drawer>
      <DrawerTrigger>
        <button>Open Drawer</button>
      </DrawerTrigger>

      <DrawerContent>
        <h2>Hello from the drawer!</h2>
        <p>Any content goes here.</p>
      </DrawerContent>
    </Drawer>
  );
}
```

## Features

- **Drag to dismiss** — drag the handle downward more than 100px to close
- **Backdrop click to close** — clicking outside the panel closes it
- **Touch & mouse support** — works on both mobile and desktop
- **Smooth animations** — cubic-bezier transitions on open/close; transition paused during active drag
- **Scroll lock** — `body` overflow is hidden while the drawer is open
- **Max height** — panel is capped at 85vh with internal scroll for overflow content

## Component API

### `<Drawer>`

Root wrapper. Must wrap all other Drawer components.

| Prop       | Type              | Description           |
| ---------- | ----------------- | --------------------- |
| `children` | `React.ReactNode` | Drawer sub-components |

### `<DrawerTrigger>`

Wraps any element and opens the drawer on click.

| Prop       | Type              | Description           |
| ---------- | ----------------- | --------------------- |
| `children` | `React.ReactNode` | The clickable element |

### `<DrawerContent>`

The sliding panel. Handles animations and drag interactions.

| Prop       | Type              | Description                       |
| ---------- | ----------------- | --------------------------------- |
| `children` | `React.ReactNode` | Content rendered inside the panel |

## Context (`DrawerContext`)

Internal state shared between components via `useDrawer()`.

| Value           | Type                          | Description                           |
| --------------- | ----------------------------- | ------------------------------------- |
| `open`          | `boolean`                     | Whether the drawer is visible         |
| `setOpen`       | `(open: boolean) => void`     | Toggle open/close                     |
| `isDragging`    | `boolean`                     | Whether a drag gesture is in progress |
| `setIsDragging` | `(dragging: boolean) => void` | Update drag state                     |
| `currentY`      | `number`                      | Current drag offset in pixels         |
| `setCurrentY`   | `(y: number) => void`         | Update drag offset                    |

> `useDrawer()` throws if called outside of a `<Drawer>` wrapper.

## Requirements

- Next.js with the App Router (`"use client"` directives required)
- Tailwind CSS with a custom `z-modal` z-index utility and design tokens (`bg-surface`, `border-border`, `bg-inverse`, `bg-subtle`)
- `cn()` utility from `@/lib/utils` (e.g. `clsx` + `tailwind-merge`)
