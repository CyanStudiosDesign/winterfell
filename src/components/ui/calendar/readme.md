# Calendar Component

A fully featured, responsive, and accessible Calendar component built with React, TypeScript, Tailwind CSS, and a custom Dropdown system.

The component supports single date selection, multiple date selection, and date range selection while providing both controlled and uncontrolled state management patterns.

Designed for modern design systems, booking interfaces, scheduling applications, dashboards, and date-based workflows.

---

# Features

* Single Date Selection
* Multiple Date Selection
* Date Range Selection
* Controlled Mode
* Uncontrolled Mode
* Month Navigation
* Year Navigation
* Interactive Month Dropdown
* Interactive Year Dropdown
* Min & Max Date Constraints
* Outside Days Support
* Custom Week Start Day
* Responsive Layout
* Accessibility Support
* Design System Integration
* Custom Styling API

---

# Installation

Required dependencies:

```bash
npm install lucide-react
```

---

# Import

```tsx
import { Calendar } from "@/components/ui/calendar";
```

---

# Basic Usage

## Single Selection

```tsx
<Calendar />
```

Default mode:

```tsx
mode="single"
```

Users can select one date at a time.

---

## Multiple Selection

```tsx
<Calendar
  mode="multiple"
/>
```

Users can select multiple dates.

---

## Range Selection

```tsx
<Calendar
  mode="range"
/>
```

Users can select:

```text
Start Date → End Date
```

Ideal for:

* Hotel Booking
* Leave Management
* Travel Planning
* Event Scheduling

---

# Controlled Mode

Parent controls the selected value.

```tsx
const [date, setDate] = useState<Date>();

<Calendar
  mode="single"
  value={date}
  onChange={setDate}
/>
```

Benefits:

* Global state management
* Form integration
* Programmatic updates

---

# Uncontrolled Mode

Component manages its own state.

```tsx
<Calendar
  defaultValue={new Date()}
/>
```

Best for:

* Simple forms
* Quick implementations
* Standalone usage

---

# Selection Modes

## Single Mode

```tsx
<Calendar
  mode="single"
/>
```

Value Type:

```ts
Date
```

Example:

```tsx
<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
/>
```

---

## Multiple Mode

```tsx
<Calendar
  mode="multiple"
/>
```

Value Type:

```ts
Date[]
```

Example:

```tsx
<Calendar
  value={selectedDates}
  onChange={setSelectedDates}
/>
```

---

## Range Mode

```tsx
<Calendar
  mode="range"
/>
```

Value Type:

```ts
{
  from: Date;
  to?: Date;
}
```

Example:

```tsx
<Calendar
  value={range}
  onChange={setRange}
/>
```

---

# Month Navigation

Users can navigate between months using built-in controls.

```tsx
<ChevronLeft />
<ChevronRight />
```

Features:

* Previous Month
* Next Month
* Automatic calendar regeneration

---

# Month Dropdown

Users can directly select a month.

```tsx
January
February
March
...
December
```

Implemented using:

```tsx
<Dropdown>
```

Benefits:

* Faster navigation
* Better UX
* Reduced clicking

---

# Year Dropdown

Users can directly jump between years.

```tsx
2024
2025
2026
...
```

Year range is automatically generated from:

```tsx
minDate
maxDate
```

or defaults to:

```tsx
Current Year ± 10
```

---

# Min & Max Dates

Restrict available dates.

```tsx
<Calendar
  minDate={new Date(2025, 0, 1)}
  maxDate={new Date(2025, 11, 31)}
/>
```

Disabled dates:

* Cannot be selected
* Cannot receive focus
* Display disabled styling

---

# Outside Days

## Enabled

```tsx
<Calendar
  showOutsideDays={true}
/>
```

Displays dates from adjacent months.

---

## Disabled

```tsx
<Calendar
  showOutsideDays={false}
/>
```

Outside dates are hidden.

---

# Week Start Day

## Sunday

```tsx
<Calendar
  weekStartsOn={0}
/>
```

Output:

```text
Sun Mon Tue Wed Thu Fri Sat
```

---

## Monday

```tsx
<Calendar
  weekStartsOn={1}
/>
```

Output:

```text
Mon Tue Wed Thu Fri Sat Sun
```

Useful for international applications.

---

# Custom Styling

Supports custom class overrides.

```tsx
<Calendar
  classNames={{
    day: "custom-day",
    day_selected: "custom-selected",
    weekday: "custom-weekday",
  }}
/>
```

Available slots:

```ts
months
month_caption
weekdays
weekday
grid
day
day_selected
day_range_middle
day_today
day_outside
day_disabled
```

---

# Responsive Design

Built with responsive utilities.

Examples:

```tsx
max-w-sm
sm:p-5
text-xs
sm:text-sm
```

Benefits:

* Mobile Friendly
* Tablet Friendly
* Desktop Friendly

---

# Date Range Behavior

When selecting a range:

### First Click

```text
FROM
```

is selected.

### Second Click

```text
TO
```

is selected.

### Range Highlight

All dates between:

```text
FROM → TO
```

receive range styling.

---

# Disabled Date Styling

Disabled dates automatically receive:

```txt
cursor-not-allowed
opacity-20
pointer-events-none
line-through
```

Benefits:

* Clear visual feedback
* Prevents invalid selection

---

# Today Indicator

Current date is automatically highlighted.

Applied styling:

```txt
border-primary
font-semibold
text-primary
```

Benefits:

* Better orientation
* Faster navigation

---

# Accessibility

Includes:

* Semantic buttons
* Keyboard focus support
* Focus-visible styles
* Disabled state handling

Examples:

```tsx
focus-ring-visible
```

Benefits:

* Better keyboard navigation
* Improved accessibility compliance

---

# Internal Architecture

The component is divided into several logical systems.

## State Layer

Handles:

```tsx
selected value
controlled state
uncontrolled state
```

---

## Navigation Layer

Handles:

```tsx
month switching
year switching
dropdown navigation
```

---

## Rendering Layer

Generates:

```tsx
42-day calendar grid
outside days
range highlighting
```

---

## Constraint Layer

Handles:

```tsx
minDate
maxDate
disabled dates
```

---

# Props

```ts
interface CalendarProps {
  mode?: "single" | "multiple" | "range";

  value?: Date | Date[] | {
    from: Date;
    to?: Date;
  };

  onChange?: (value: any) => void;

  defaultValue?: Date | Date[] | {
    from: Date;
    to?: Date;
  };

  minDate?: Date;
  maxDate?: Date;

  showOutsideDays?: boolean;

  weekStartsOn?: 0 | 1;

  className?: string;

  classNames?: {
    months?: string;
    month_caption?: string;
    weekdays?: string;
    weekday?: string;
    grid?: string;
    day?: string;
    day_selected?: string;
    day_range_middle?: string;
    day_today?: string;
    day_outside?: string;
    day_disabled?: string;
  };
}
```

---
