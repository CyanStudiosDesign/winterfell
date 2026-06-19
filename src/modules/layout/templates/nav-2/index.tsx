"use client"

import React, { useState } from "react"
import {
  Menu,
  X,
  ChevronDown,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/buttons/Buttons"
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
} from "@/components/ui/dropdown-menu/DropDownMenu"

export default function Nav2() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "New Arrivals", href: "/new" },
    { name: "Sale", href: "/sale" },
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Children", href: "/children" },
    { name: "Brand", href: "/brand" },
  ]

  return (
    <div className="bg-red-400 top-0 inset-x-0 ">
      <header className="h-16 w-full border-b bg-white/75 backdrop-blur-md border-neutral-100 transition-all duration-200">
        <nav className="max-w-7xl mx-auto h-full px-4 sm:px-4 lg:px-4 flex items-center justify-between text-xs font-medium gap-x-2 ">
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-neutral-800 p-1 hover:text-neutral-500 transition-colors mr-2 shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 stroke-[1.5]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[1.5]" />
            )}
          </button>

          {/* Left Side: Styled Trigger directly as a Div/Span alternative element */}
          <div className="flex items-center gap-x-2 md:gap-x-4 shrink-0">
            <Dropdown>
              <DropdownTrigger className="rounded-full bg-neutral-100/80 hover:bg-neutral-200/70 text-neutral-700 font-medium px-4 h-9 inline-flex items-center justify-center gap-x-1.5 border border-transparent transition-all text-xs cursor-pointer focus:outline-none">
                Clothing
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500 stroke-[2]" />
              </DropdownTrigger>
              <DropdownContent className="mt-1 bg-white border border-neutral-100 shadow-md rounded-xl p-1 min-w-[140px]">
                <DropdownLabel className="px-2 py-1.5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                  Categories
                </DropdownLabel>

                {/* Clean inline element options with no secondary <button> markup wrapper */}
                <DropdownItem href="/profile" className="w-full text-left block px-3 py-2 text-xs font-normal text-neutral-700 hover:bg-neutral-50 rounded-md transition-colors cursor-pointer">
                  Profile
                </DropdownItem>
                <DropdownItem href="/settings" className="w-full text-left block px-3 py-2 text-xs font-normal text-neutral-700 hover:bg-neutral-50 rounded-md transition-colors cursor-pointer">
                  Settings
                </DropdownItem>
                <DropdownItem className="w-full text-left block px-3 py-2 text-xs font-normal text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer">
                  Logout
                </DropdownItem>
              </DropdownContent>
            </Dropdown>

            {/* Main Desktop Navigation Pills */}
            <div className="hidden md:flex items-center gap-x-2">
              {navLinks.slice(0, 2).map((link) => (
                <a key={link.name} href={link.href} className="shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full bg-transparent hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 border border-neutral-200/60 px-4 h-9 font-medium text-xs transition-all whitespace-nowrap"
                  >
                    {link.name}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Center Links (Capsule / Pill Style Search) */}
          <div className="flex-1 mx-2">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-neutral-100/80 hover:bg-neutral-100 text-neutral-800 placeholder-neutral-400 font-normal text-xs pl-4 pr-10 h-9 rounded-full focus:outline-none "
              />
              <Search className="w-3.5 h-3.5 absolute right-3.5 text-neutral-500 stroke-[2] pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Secondary Nav Links */}
          <div className="hidden md:flex items-center gap-x-2 shrink-0">
            {navLinks.slice(2).map((link) => (
              <a key={link.name} href={link.href} className="shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full bg-transparent hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 border border-neutral-200/60 px-4 h-9 font-medium text-xs transition-all whitespace-nowrap"
                >
                  {link.name}
                </Button>
              </a>
            ))}
          </div>

        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 top-[64px] bg-white border-t border-neutral-100 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 py-6 space-y-2 flex flex-col font-medium text-sm text-neutral-800 h-[calc(100vh-64px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="w-full">
              <Button
                variant="ghost"
                className="w-full justify-start text-left text-neutral-800 hover:bg-neutral-50 h-10 rounded-lg px-3 text-sm bg-transparent"
              >
                {link.name}
              </Button>

              
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}