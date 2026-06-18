# Textarea

A responsive textarea component that displays an enabled and a disabled state side by side for reference.

## Usage

```tsx
import { Textarea } from "./Textarea";

export default function Example() {
  return <Textarea />;
}
```

## Behaviour

The component renders two textareas stacked vertically inside a centered container:

| Instance | State    | Description                                            |
| -------- | -------- | ------------------------------------------------------ |
| First    | Enabled  | Fully interactive; supports resize and focus styles    |
| Second   | Disabled | Non-interactive; reduced opacity, `not-allowed` cursor |

## Default Styles

| Class                                                | Effect                                                    |
| ---------------------------------------------------- | --------------------------------------------------------- |
| `w-full`                                             | Full width of the container                               |
| `min-h-8` / `md:min-h-[100px]`                       | Minimum height — compact on mobile, taller on desktop     |
| `max-h-[300px]` / `md:max-h-[500px]`                 | Maximum height before scroll kicks in                     |
| `resize-y`                                           | Vertical resize only                                      |
| `border border-border`                               | Border using design token color                           |
| `bg-surface`                                         | Surface background color (design token)                   |
| `rounded-md`                                         | Medium border radius                                      |
| `px-3 py-2`                                          | Internal padding                                          |
| `placeholder:text-fg-muted`                          | Muted color for placeholder text                          |
| `focus-visible:outline-none focus-visible:shadow-lg` | Custom focus style — removes default outline, adds shadow |
| `disabled:cursor-not-allowed disabled:opacity-50`    | Visual feedback for the disabled state                    |

The outer container is `w-full` and centers with `mx-auto`, capped at `sm:max-w-md` → `md:max-w-3xl` across breakpoints.

## Customisation

The component currently accepts no props. To make it reusable, consider extending it like so:

```tsx
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea className={cn("w-full min-h-8 ...", className)} {...props} />
  );
}
```

## Requirements

- React 18+
- Tailwind CSS
- `cn` utility from `@/lib/utils` (e.g. `clsx` + `tailwind-merge`)
- Design tokens `border`, `surface`, and `fg-muted` defined in your Tailwind theme
