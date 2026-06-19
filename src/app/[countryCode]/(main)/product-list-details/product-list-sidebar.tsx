"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  RangeSlider,
  RangeSliderContent,
  RangeSliderThumb,
} from "@/components/ui/range-slider/RangeSlider"
import ToggleChip from "@/components/ui/toggle/Toggle"
import { filterChips, filterSections } from "./data"

const PRICE_MIN = 10
const PRICE_MAX = 5000
const PRICE_DEFAULT = [100, 1300]
const PRICE_SCALE = ["10K", "100K", "1.300k", "5.000k"]

function PriceFilter() {
  const [resetKey, setResetKey] = useState(0)

  return (
    <div className="mt-6 border-t border-gray-200 pt-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold">Price</p>
        <button
          type="button"
          onClick={() => setResetKey((k) => k + 1)}
          className="text-xs text-gray-400 transition-colors hover:text-gray-600"
        >
          Reset
        </button>
      </div>

      <RangeSlider
        key={resetKey}
        min={PRICE_MIN}
        max={PRICE_MAX}
        step={10}
        defaultValue={PRICE_DEFAULT}
        colorScheme="#000000"
      >
        <RangeSliderContent className="h-1.5 w-full rounded-full bg-gray-200" />
        <RangeSliderThumb
          index={0}
          className="h-3.5 w-3.5 rounded-full bg-black shadow-sm transition-transform hover:scale-110"
        />
        <RangeSliderThumb
          index={1}
          className="h-3.5 w-3.5 rounded-full bg-black shadow-sm transition-transform hover:scale-110"
        />
      </RangeSlider>

      <div className="mt-1 flex justify-between text-xs text-gray-400">
        {PRICE_SCALE.map((mark) => (
          <span key={mark}>{mark}</span>
        ))}
      </div>
    </div>
  )
}

function FilterCheckbox({ label, count }: { label: string; count: number }) {
  const [checked, setChecked] = useState(false)

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => setChecked((v) => !v)}
      className="flex w-full items-center gap-3 text-left"
    >
      <span
        className={`grid size-5 shrink-0 place-items-center rounded-md border transition-colors ${
          checked
            ? "border-black bg-black text-white"
            : "border-gray-300 bg-white text-transparent"
        }`}
      >
        <Check className="size-3.5" strokeWidth={3} />
      </span>
      <span className="flex flex-1 items-center justify-between gap-3">
        <span className="font-medium">{label}</span>
        <span className="text-xs text-gray-400">{count}</span>
      </span>
    </button>
  )
}

export default function ProductListSidebar() {
  return (
    <aside className="text-sm">
      <div className="mb-5">
        <p className="mb-3 text-xs font-semibold uppercase text-gray-500">
          Filters
        </p>
        <div className="flex flex-wrap gap-2">
          {filterChips.map((chip) => (
            <ToggleChip
              key={chip}
              ariaLabel={`Filter by ${chip}`}
              label={chip}
              size="sm"
              variant="secondary"
              defaultChecked={chip === "New Arrivals"}
            />
          ))}
        </div>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["brand", "category"]}
        className="rounded-none border-x-0 border-t border-gray-200 bg-transparent"
      >
        {filterSections.map((section) => (
          <AccordionItem
            key={section.value}
            value={section.value}
            className="border-gray-200"
          >
            <AccordionTrigger className="px-0 py-4 text-sm font-semibold ">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-5 pt-0">
              <div className="space-y-3">
                {section.items.map((item) => (
                  <FilterCheckbox
                    key={item.label}
                    label={item.label}
                    count={item.count}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <PriceFilter />
    </aside>
  )
}
