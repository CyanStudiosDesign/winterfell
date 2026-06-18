# Checkbox Components

A set of composable checkbox components built with React and Tailwind CSS.

## File Structure

```
components/ui/checkbox/
├── CheckboxCard.tsx
├── CheckboxDescription.tsx
├── CheckboxIndicator.tsx
└── CheckboxLabel.tsx
```

## Components

| Component             | Description                                            |
| --------------------- | ------------------------------------------------------ |
| `CheckboxCard`        | Card wrapper that reacts to checkbox state via context |
| `CheckboxIndicator`   | The visual checkbox element                            |
| `CheckboxLabel`       | Row wrapper for checkbox + text                        |
| `CheckboxDescription` | Muted helper text below a label                        |

## Usage

### Basic checkbox

```tsx
<CheckboxLabel>
  <CheckboxIndicator />
  Accept terms and conditions
</CheckboxLabel>
```

### With description

```tsx
<div className="flex flex-col gap-1">
  <CheckboxLabel>
    <CheckboxIndicator />
    Accept terms and conditions
  </CheckboxLabel>
  <CheckboxDescription>
    By clicking this checkbox, you agree to the terms.
  </CheckboxDescription>
</div>
```

### Disabled

```tsx
<CheckboxLabel>
  <CheckboxIndicator disabled />
  Accept terms and conditions
</CheckboxLabel>
```

### Card (checkbox drives card background)

```tsx
<CheckboxCard>
  <CheckboxLabel>
    <CheckboxIndicator />
    Enable notifications
  </CheckboxLabel>
  <CheckboxDescription>
    You can enable or disable notifications at any time.
  </CheckboxDescription>
</CheckboxCard>
```

## How it works

`CheckboxCard` holds a `checked` state and exposes it via React context (`CheckboxCardContext`). `CheckboxIndicator` reads from this context when rendered inside a `CheckboxCard` — clicking it updates the card's background automatically. Outside a card, `CheckboxIndicator` falls back to its own internal state.

```
CheckboxCard (owns state, provides context)
└── CheckboxLabel
    └── CheckboxIndicator (reads context → drives card bg)
```

No state management needed in the parent page.

## Props

### `CheckboxIndicator`

| Prop       | Type      | Default | Description                                 |
| ---------- | --------- | ------- | ------------------------------------------- |
| `disabled` | `boolean` | `false` | Disables interaction and dims the indicator |

### `CheckboxCard`, `CheckboxLabel`, `CheckboxDescription`

Accept only `children`. All state is managed internally.

## CSS Variables

These custom CSS variables are used across the components and should be defined in your `globals.css`:

| Variable          | Used in                                | Description                      |
| ----------------- | -------------------------------------- | -------------------------------- |
| `bg-surface`      | `CheckboxIndicator`, `CheckboxCard`    | Default background               |
| `bg-muted`        | `CheckboxCard`, `CheckboxIndicator`    | Hover / disabled background      |
| `bg-primary`      | `CheckboxIndicator`                    | Checked indicator background     |
| `border-border`   | `CheckboxIndicator`, `CheckboxCard`    | Default border color             |
| `border-primary`  | `CheckboxIndicator`, `CheckboxCard`    | Checked border color             |
| `text-fg`         | `CheckboxLabel`, `CheckboxDescription` | Default text color               |
| `text-fg-inverse` | `CheckboxIndicator`                    | Text color on primary background |
| `text-foreground` | `CheckboxCard`                         | Text color in checked card state |

Example `globals.css`:

```css
@layer base {
  :root {
    --surface: <your-value>;
    --muted: <your-value>;
    --primary: <your-value>;
    --border: <your-value>;
    --fg: <your-value>;
    --fg-inverse: <your-value>;
    --foreground: <your-value>;
  }
}
```

> Replace `<your-value>` with your actual color values.
