# Chart Component

A lightweight, composable, and fully customizable charting system built with React, TypeScript, SVG, and Tailwind CSS.

Unlike traditional chart libraries, this implementation uses a compound component architecture and React Context to provide complete control over rendering, styling, tooltips, and chart behavior while keeping the API simple and intuitive.

---

# Features

* Compound Component Architecture
* SVG-Based Rendering
* Bar Chart Support
* Multiple Data Series
* Interactive Tooltips
* Hover States
* Automatic Scaling
* Responsive Layout
* Context-Based State Management
* Custom Colors
* Design System Integration
* Accessibility Friendly Structure

---

# Installation

No charting library is required.

Required dependencies:

```bash
npm install react
```

Optional:

```bash
npm install lucide-react
```

---

# Import

```tsx
import {
  ChartContainer,
  BarChart,
  Bar,
  ChartTooltip,
} from "@/components/ui/chart/Chart";
```

---

# Basic Usage

## Single Series Chart

```tsx
const data = [
  { label: "Jan", sales: 4500 },
  { label: "Feb", sales: 5900 },
  { label: "Mar", sales: 7100 },
];

<ChartContainer data={data}>
  <BarChart>
    <Bar
      dataKey="sales"
      color="fill-blue-600"
    />
  </BarChart>
</ChartContainer>
```

---

## Multi Series Chart

```tsx
const data = [
  {
    label: "January",
    desktop: 186,
    mobile: 80,
  },
  {
    label: "February",
    desktop: 305,
    mobile: 200,
  },
];

<ChartContainer data={data}>
  <BarChart>
    <Bar
      dataKey="desktop"
      color="fill-blue-600"
    />

    <Bar
      dataKey="mobile"
      color="fill-blue-400"
    />
  </BarChart>
</ChartContainer>
```

---

# Tooltip Usage

```tsx
<ChartContainer data={data}>
  <BarChart>

    <Bar
      dataKey="sales"
      color="fill-blue-600"
    />

    <ChartTooltip />

  </BarChart>
</ChartContainer>
```

---

# Tooltip Positions

## Top

```tsx
<ChartTooltip position="top" />
```

---

## Bottom

```tsx
<ChartTooltip position="bottom" />
```

---

## Left

```tsx
<ChartTooltip position="left" />
```

---

## Right

```tsx
<ChartTooltip position="right" />
```

---

# Example

```tsx
<ChartContainer data={chartData}>
  <BarChart>

    <Bar
      dataKey="desktop"
      color="fill-blue-600"
    />

    <Bar
      dataKey="mobile"
      color="fill-blue-400"
    />

    <ChartTooltip
      position="right"
    />

  </BarChart>
</ChartContainer>
```

---

# ChartContainer

Root provider component.

Responsibilities:

* Data management
* Layout calculations
* Tooltip state
* Scale calculations
* Context distribution

Example:

```tsx
<ChartContainer
  data={chartData}
  height={300}
>
```

---

## Props

```ts
interface ChartContainerProps {
  data: DataPoint[];
  height?: number;
}
```

---

# Data Format

The chart accepts any object structure as long as:

```tsx
label
```

exists.

Example:

```tsx
[
  {
    label: "January",
    desktop: 186,
    mobile: 80,
  }
]
```

---

# BarChart

Chart wrapper component.

Responsibilities:

* SVG rendering
* X-axis labels
* Tooltip integration
* Bar composition

Example:

```tsx
<BarChart>
  ...
</BarChart>
```

---

# Bar Component

Represents an individual data series.

Example:

```tsx
<Bar
  dataKey="sales"
  color="fill-blue-600"
/>
```

---

## Props

```ts
interface BarProps {
  dataKey: string;
  color?: string;
  className?: string;
}
```

---

# Multiple Bar Series

The chart automatically detects all registered bars.

Example:

```tsx
<Bar
  dataKey="desktop"
/>

<Bar
  dataKey="mobile"
/>
```

Benefits:

* Automatic grouping
* Dynamic width calculation
* Shared scaling

---

# ChartTooltip

Interactive tooltip component.

Example:

```tsx
<ChartTooltip
  position="top"
/>
```

---

## Props

```ts
interface ChartTooltipProps {
  enabled?: boolean;

  position?:
    | "top"
    | "bottom"
    | "left"
    | "right";
}
```

---

# Automatic Scaling

Maximum value is automatically calculated.

Example:

```tsx
[
  { sales: 4500 },
  { sales: 8400 },
  { sales: 9000 }
]
```

The chart automatically scales to:

```text
9000
```

Benefits:

* No manual configuration
* Better developer experience
* Dynamic datasets

---

# Hover Interaction

Every data group receives an invisible hover zone.

```tsx
<rect
  fill="transparent"
/>
```

Benefits:

* Larger hover area
* Better UX
* Easier tooltip triggering

---

# Tooltip Content

Tooltips automatically display:

```text
Label
Series Name
Value
```

Example:

```text
January

Desktop: 186
Mobile: 80
```

No manual configuration required.

---

# Responsive Design

SVG scales automatically.

```tsx
className="w-full h-auto"
```

Benefits:

* Mobile support
* Tablet support
* Desktop support
* Fluid resizing

---

# Grid System

The chart automatically generates:

```text
0%
20%
40%
60%
80%
100%
```

grid intervals.

Features:

* Horizontal grid lines
* Dynamic labels
* Automatic scaling

---

# Color Customization

Bars accept Tailwind utility classes.

Example:

```tsx
<Bar
  dataKey="sales"
  color="fill-emerald-500"
/>
```

or

```tsx
<Bar
  dataKey="sales"
  color="fill-red-500"
/>
```

---

# Context Architecture

The component uses React Context to share:

```tsx
data
chartWidth
chartHeight
maxVal
groupWidth
activeId
registeredKeys
```

Benefits:

* No prop drilling
* Shared chart state
* Cleaner APIs
* Easier scaling

---

# Internal Architecture

The chart is divided into four layers.

## Container Layer

```tsx
<ChartContainer />
```

Handles:

* Data
* Layout
* Scaling
* State

---

## Layout Layer

```tsx
<SvgLayout />
```

Handles:

* Grid rendering
* Hover zones
* Axes

---

## Visualization Layer

```tsx
<Bar />
```

Handles:

* Data rendering
* Positioning
* Animations

---

## Interaction Layer

```tsx
<ChartTooltip />
```

Handles:

* Hover states
* Tooltip rendering
* Active data display

---

# Strengths

1. Compound Component Architecture
2. SVG-Based Rendering
3. Multi-Series Support
4. Interactive Tooltips
5. Automatic Scaling
6. Responsive Design
7. Lightweight Implementation
8. Context-Based State Management
9. Design-System Friendly
10. Production-Ready Foundation

---

# Example Dashboard Usage

```tsx
<div className="flex flex-col gap-4">

  <ChartContainer data={trafficData}>
    <BarChart>
      <Bar
        dataKey="desktop"
        color="fill-blue-600"
      />
      <Bar
        dataKey="mobile"
        color="fill-blue-400"
      />
      <ChartTooltip />
    </BarChart>
  </ChartContainer>

  <ChartContainer data={salesData}>
    <BarChart>
      <Bar
        dataKey="sales"
        color="fill-emerald-600"
      />
      <ChartTooltip
        position="right"
      />
    </BarChart>
  </ChartContainer>

</div>
```

