# OtpInput

A simple OTP input component that renders a row of single-character fields. It handles digit-only input, auto-focuses the next field on entry, and moves focus back on backspace.

## Import

```tsx
import Container from "@/components/ui/otp/Container";
```

## Basic Usage

`Container` renders 4 fields by default. Drop it in wherever you need an OTP input.

```tsx
<Container />
```

## Custom Length

Pass a `length` prop to render a different number of fields.

```tsx
// 4 fields (default)
<Container />

// 6 fields
<Container length={6} />
```

## Keyboard Behavior

The component handles focus automatically so users can type through the fields without clicking.

```tsx
// Typing a digit → moves focus to the next field
// Backspace on an empty field → moves focus to the previous field
// First field is auto-focused on mount
```

## Props

## Container

| Prop     | Type     | Default | Description                           |
| -------- | -------- | ------- | ------------------------------------- |
| `length` | `number` | `4`     | Number of OTP input fields to render. |

## Digit-only Validation

Only numeric characters (`0–9`) are accepted. Any other character is silently ignored and does not update the field.

```tsx
// Accepted
("1", "4", "0");

// Ignored
("a", "!", " ", "A");
```

## Styling

The component uses design tokens from `globals.css`, such as:

- `--color-canvas`
- `--color-surface`
- `--color-border`
- `--color-border-strong`
- `--color-fg`
- `--color-fg-muted`
- `--radius-md`
- `--shadow-sm`
- `--spacing-1`, `--spacing-3`, `--spacing-12`
- `--font-medium`
- `--leading-tight`
- `--duration-fast`

Each input is `h-20 w-20` (80×80px) with `text-5xl` for large, readable digits. Spacing between fields is controlled by `m-[var(--spacing-3)]`.

```tsx
// To change field size, update the input className
className = "h-16 w-16 text-4xl ...";
```

## Notes

- `Container` is a `"use client"` component and must run in the browser.
- The first input is auto-focused on mount via `useEffect`.
- Input state is stored as an array of strings, one entry per field, sized to `length`.
- `maxLength={1}` is set on each input to prevent multi-character paste into a single field.
- Focus management is handled via a `useRef` array (`refArr`) that holds references to each input element.
- To read the final OTP value, join the array: `inputArray.join("")`.
