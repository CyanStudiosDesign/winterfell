# Command Component

A fully composable, searchable, and accessible Command Palette component built with React, TypeScript, Tailwind CSS, and Lucide React.

Inspired by modern command interfaces such as Raycast, VS Code Command Palette, Spotlight Search, and Linear, this component provides a keyboard-first experience for navigation, actions, search, and productivity workflows.

---

# Features

* Compound Component Architecture
* Searchable Command Palette
* Keyword-Based Search
* Ctrl / Cmd + K Support
* Click Outside Detection
* Escape Key Support
* Body Scroll Lock
* Empty State Handling
* Grouped Commands
* Disabled Commands
* Keyboard Shortcut Display
* Controlled Mode Support
* Uncontrolled Mode Support
* Accessibility Support
* Context-Based State Management

---

# Installation

Required dependency:

```bash
npm install lucide-react
```

---

# Import

```tsx
import {
  Command,
  CommandTrigger,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
  CommandShortcut,
  CommandSeparator,
} from "@/components/ui/command";
```

---

# Uncontrolled Usage

The simplest way to use the command palette.

```tsx
<Command>

  <CommandTrigger>
    Open Search
  </CommandTrigger>

  <CommandInput />

  <CommandList>

    <CommandItem>
      Dashboard
    </CommandItem>

    <CommandItem>
      Settings
    </CommandItem>

  </CommandList>

</Command>
```

In this mode the component manages its own open state internally.

---

# Controlled Usage

Useful when the parent component needs full control.

```tsx
const [open, setOpen] = useState(false);

<Command
  open={open}
  onOpenChange={setOpen}
>
  ...
</Command>
```

Use controlled mode when:

* Opening from a navbar search button
* Opening from a sidebar action
* Programmatic control is required
* Global application search is implemented

---

# Complete Example

```tsx
<Command>

  <CommandTrigger>
    Search Commands
  </CommandTrigger>

  <CommandInput />

  <CommandList>

    <CommandGroup heading="Navigation">

      <CommandItem
        keywords={["dashboard", "home"]}
        onSelect={() => console.log("Dashboard")}
      >
        Dashboard

        <CommandShortcut>
          ⌘D
        </CommandShortcut>
      </CommandItem>

      <CommandItem
        keywords={["settings", "preferences"]}
      >
        Settings

        <CommandShortcut>
          ⌘S
        </CommandShortcut>
      </CommandItem>

    </CommandGroup>

    <CommandSeparator />

    <CommandGroup heading="Actions">

      <CommandItem>
        Create Project
      </CommandItem>

      <CommandItem disabled>
        Delete Workspace
      </CommandItem>

    </CommandGroup>

    <CommandEmpty>
      No results found.
    </CommandEmpty>

  </CommandList>

</Command>
```

---

# Keyboard Shortcuts

The command palette can be opened globally using:

```text
Ctrl + K
```

or

```text
⌘ + K
```

Implementation:

```tsx
if (
  e.key.toLowerCase() === "k" &&
  (e.metaKey || e.ctrlKey)
)
```

Benefits:

* Faster navigation
* Better productivity
* Familiar user experience

---

# Search Functionality

Search is built directly into the component.

```tsx
<CommandInput />
```

Each command can provide additional search keywords.

```tsx
<CommandItem
  keywords={[
    "dashboard",
    "home",
    "analytics"
  ]}
>
  Dashboard
</CommandItem>
```

Searching for:

```text
home
```

or

```text
analytics
```

will still match Dashboard.

---

# Body Scroll Lock

When the command palette opens:

```tsx
document.body.style.overflow = "hidden";
```

Benefits:

* Prevents background scrolling
* Better modal behavior
* Improved mobile experience
* Cleaner user interaction

When the command palette closes, the original overflow state is restored automatically.

---

# Component Overview

## Command

Root provider component.

Responsibilities:

* Open state management
* Search state management
* Keyboard shortcut handling
* Overlay rendering
* Context distribution
* Body scroll locking

Supports:

```tsx
open?: boolean;
onOpenChange?: (open: boolean) => void;
```

---

## CommandTrigger

Opens the command palette.

```tsx
<CommandTrigger>
  Search
</CommandTrigger>
```

---

## CommandInput

Search field component.

Features:

* Live filtering
* Search synchronization
* Built-in search icon

```tsx
<CommandInput
  placeholder="Search commands..."
/>
```

---

## CommandList

Container for command items.

Features:

* Scrollable content
* Maximum height handling
* Listbox semantics

```tsx
<CommandList>
  ...
</CommandList>
```

---

## CommandGroup

Organizes commands into sections.

```tsx
<CommandGroup heading="Navigation">
  ...
</CommandGroup>
```

Behavior:

* Group headings hide during search
* Cleaner filtered results

---

## CommandItem

Selectable command row.

Supports:

```tsx
onSelect
disabled
keywords
```

Example:

```tsx
<CommandItem
  keywords={["profile", "account"]}
>
  Profile
</CommandItem>
```

---

## CommandEmpty

Appears when:

```text
Search Query Exists
AND
No Matching Commands Exist
```

Example:

```tsx
<CommandEmpty>
  No commands found.
</CommandEmpty>
```

---

## CommandShortcut

Displays keyboard shortcuts.

```tsx
<CommandShortcut>
  ⌘K
</CommandShortcut>
```

Output:

```text
Search                    ⌘K
```

---

## CommandSeparator

Visual divider between command groups.

```tsx
<CommandSeparator />
```

Automatically hides during search.

---

# Disabled Commands

Commands can be disabled.

```tsx
<CommandItem disabled>
  Delete Workspace
</CommandItem>
```

Disabled behavior:

* Cannot be clicked
* Cannot execute actions
* Reduced opacity
* Cursor disabled

Applied styles:

```text
opacity-50
cursor-not-allowed
pointer-events-none
```

---

# Empty State Handling

The component automatically tracks visible commands.

Each command registers itself through the provider.

```tsx
registerItem(...)
```

and unregisters itself when removed.

```tsx
unregisterItem(...)
```

This enables accurate empty-state detection.

---

# Overlay Behavior

The command menu renders as a modal overlay.

Features:

* Fixed positioning
* Centered layout
* Backdrop blur
* Darkened background

```tsx
fixed inset-0
bg-black/50
backdrop-blur-sm
```

Benefits:

* Better focus
* Cleaner UI
* Professional modal experience

---

# Accessibility

Includes:

```tsx
role="listbox"
role="group"
role="option"
```

Benefits:

* Screen reader compatibility
* Semantic structure
* Improved accessibility

---

# Context Architecture

The component uses React Context to manage:

```tsx
isOpen
searchQuery
visibleItemsCount
registerItem
unregisterItem
```