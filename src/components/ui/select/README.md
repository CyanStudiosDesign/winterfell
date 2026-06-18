# Select Components

A composable select/dropdown system for React — built with CSS custom properties and zero dependencies.

```
components/ui/
├── select.tsx         # Root container & onSelect owner
├── SelectGroup.tsx    # Labeled sections with optional dividers
└── SelectItems.tsx    # Individual clickable options
```

```tsx
<Select onSelect={(val) => console.log(val)}>
  <SelectGroup title="Fruits">
    <SelectItem>Apple</SelectItem>
    <SelectItem>Mango</SelectItem>
  </SelectGroup>
  <SelectGroup title="Veggies" showDivider={false}>
    <SelectItem>Carrot</SelectItem>
  </SelectGroup>
</Select>
```

---

## Props

### `Select`

| Prop       | Type                      | Description                                 |
| ---------- | ------------------------- | ------------------------------------------- |
| `children` | `ReactNode`               | One or more `SelectGroup` components        |
| `onSelect` | `(value: string) => void` | Fires with the selected item's text content |

### `SelectGroup`

| Prop          | Type                      | Default | Description                            |
| ------------- | ------------------------- | ------- | -------------------------------------- |
| `title`       | `string`                  | —       | Section label                          |
| `children`    | `ReactNode`               | —       | One or more `SelectItem` components    |
| `showDivider` | `boolean`                 | `true`  | Renders a bottom border between groups |
| `onSelect`    | `(value: string) => void` | —       | Auto-injected by `Select`              |

### `SelectItem`

| Prop       | Type                      | Description                                         |
| ---------- | ------------------------- | --------------------------------------------------- |
| `children` | `ReactNode`               | Display label — also the value passed to `onSelect` |
| `onSelect` | `(value: string) => void` | Auto-injected by `SelectGroup`                      |

---

## How `onSelect` flows

`onSelect` is set once on `<Select>` and injected downward via `React.cloneElement` — no need to pass it to groups or items manually.

```
<Select onSelect={fn}>
  └── cloneElement → SelectGroup receives onSelect
        └── cloneElement → SelectItem receives onSelect
              └── onClick={() => onSelect(children)}
```

---

## Design Tokens

| Variable          | Used by               |
| ----------------- | --------------------- |
| `spacing-2/3/4`   | Group & item padding  |
| `text-sm`         | Item font size        |
| `text-fg`         | Item text             |
| `text-fg-muted`   | Group title text      |
| `border-border`   | Divider color         |
| `hover:bg-subtle` | Item hover background |
| `duration-fast`   | Hover transition      |

---

## Notes

- **TypeScript:** `cloneElement` uses `child: any`, which bypasses prop checks on children. Consider a Context-based approach for stricter typing.
- **Accessibility:** Add `role="listbox"` / `role="option"`, `aria-selected`, and keyboard navigation (`↑ ↓ Enter Esc`) for production use.
