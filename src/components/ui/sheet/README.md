# Sheet Component

A slide-in panel (drawer) that animates in from the right side of the screen. It manages its own open/closed state internally and renders an overlay panel with a close button, making it useful for sidebars, detail views, filters, or any supplementary content that shouldn't interrupt the main page flow.

---

## Import

```tsx
import { Sheet } from "@/components/Sheet";
```

---

## Basic Usage

```tsx
<Sheet>
  <h2>Sheet Title</h2>
  <p>Your content goes here.</p>
</Sheet>
```

Clicking the **"Open The Sheet"** button will slide the panel in from the right. The `X` button in the top-right corner of the panel closes it.

---

## Props

| Prop        | Type                | Required | Description                                          |
|-------------|---------------------|----------|------------------------------------------------------|
| `children`  | `React.ReactNode`   | ✅        | Content rendered inside the sheet panel.             |
| `className` | `string`            | ❌        | Optional class name to extend or override panel styles. |

---

## Styling Notes

The component uses **Tailwind CSS** utility classes along with design token class names. Key layout and style details:

- **Trigger button** — styled with `bg-primary` and `text-fg-inverse`, positioned inline wherever `<Sheet>` is rendered.
- **Panel** — fixed to the right side of the viewport (`fixed top-0 right-0`), full height, `w-full` on mobile and `sm:w-96` on larger screens.
- **Z-index** — uses `z-modal` to ensure the panel renders above standard page content.
- **Background & border** — uses `bg-surface` and `border-border` design tokens, keeping it theme-aware.
- **Animation** — slides in/out via `translate-x-0` / `translate-x-full` with a `transition-transform duration-200 ease-out` transition.
- **Close button** — aligned to the right using `ml-auto flex`, styled with `text-fg-muted`.
- **`className` prop** — appended to the panel `div` via `cn()`, so you can pass additional classes to adjust width, background, padding, etc. without touching the component internals.

---

## Example with Custom Class

```tsx
<Sheet className="bg-surface-raised p-8">
  <p>Custom padded sheet content.</p>
</Sheet>
```
