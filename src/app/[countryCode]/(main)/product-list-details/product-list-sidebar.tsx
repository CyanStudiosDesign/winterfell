"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckboxIndicator, CheckboxLabel } from "@/components/ui/checkbox"
import ToggleChip from "@/components/ui/toggle/Toggle"
import { filterChips, filterSections } from "./data"

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
                  <CheckboxLabel key={item.label}>
                    <CheckboxIndicator />
                    <span className="flex flex-1 items-center justify-between gap-3 ">
                      <span>{item.label}</span>
                      <span className="text-xs text-gray-400">{item.count}</span>
                    </span>
                  </CheckboxLabel>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  )
}
