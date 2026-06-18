# Collapsible

A lightweight, composable collapsible component built with React Context. It follows a compound component pattern, giving you full control over layout and structure.

## Components

| Component              | File                     | Description                              |
| ---------------------- | ------------------------ | ---------------------------------------- |
| `<Collapsible>`        | `Collapsible.tsx`        | Root provider — manages open/close state |
| `<CollapsibleTrigger>` | `CollapsibleTrigger.tsx` | Toggle button with animated chevron icon |
| `<CollapsibleContent>` | `CollapsibleContent.tsx` | Conditionally rendered content area      |

## Usage

```tsx
import { Collapsible } from "./Collapsible";
import { CollapsibleTrigger } from "./CollapsibleTrigger";
import { CollapsibleContent } from "./CollapsibleContent";

export default function Example() {
  return (
    <Collapsible>
      <div className="flex items-center justify-between">
        <span>Section title</span>
        <CollapsibleTrigger />
      </div>

      {/* Always visible */}
      <CollapsibleContent alwaysVisible>
        <p>This is always shown.</p>
      </CollapsibleContent>

      {/* Only visible when open */}
      <CollapsibleContent>
        <p>This is shown when expanded.</p>
      </CollapsibleContent>
    </Collapsible>
  );
}
```

## API

### `<Collapsible>`

The root wrapper. Provides `isOpen` state and `setIsOpen` to all descendants via context.

| Prop       | Type              | Description           |
| ---------- | ----------------- | --------------------- |
| `children` | `React.ReactNode` | Any nested components |

### `<CollapsibleTrigger>`

A toggle button that reads and sets the open state. Renders a `ChevronsUpDown` icon that rotates 180° when open.

No props — reads state from context.

### `<CollapsibleContent>`

Conditionally renders its children based on the open state.

| Prop            | Type              | Default | Description                                 |
| --------------- | ----------------- | ------- | ------------------------------------------- |
| `children`      | `React.ReactNode` | —       | Content to show/hide                        |
| `alwaysVisible` | `boolean`         | `false` | If `true`, renders regardless of open state |

## Hook

```tsx
import { useCollapsible } from "./Collapsible";

function Custom() {
  const { isOpen, setIsOpen } = useCollapsible();
  // ...
}
```

`useCollapsible` must be called inside a `<Collapsible>` tree, or it will throw.

## Requirements

- React 18+
- [lucide-react](https://lucide.dev) (for the chevron icon in `CollapsibleTrigger`)
- Tailwind CSS (for default trigger styles)
