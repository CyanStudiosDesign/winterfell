"use client"

import { Popover, PopoverPanel, Transition, Portal } from "@headlessui/react"
import useToggleState from "@lib/hooks/use-toggle-state"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text, clx } from "@modules/common/components/ui"
import { Fragment } from "react"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { Locale } from "@lib/data/locales"
import { Menu } from "lucide-react"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  "Product List Details": "/product-list-details",
  "Product Details": "/product-details-page",
  Account: "/account",
  Cart: "/cart",
}

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({ regions, locales, currentLocale }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  return (
    <div className="h-full z-10">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              {/* Trigger Button */}
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none text-slate-400"
                >
                  <Menu size={22} />
                </Popover.Button>
              </div>

              <Portal>
                {/* Backdrop / Overlay: Clean tint, no screen-wide blur */}
                {open && (
                  <div
                    className="fixed inset-0 z-50 bg-black/25 pointer-events-auto transition-opacity duration-300"
                    onClick={close}
                    data-testid="side-menu-backdrop"
                  />
                )}

                {/* Smooth Gliding Panel Container */}
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="-translate-x-full opacity-0"
                  enterTo="translate-x-0 opacity-100"
                  leave="transition ease-in duration-200 transform"
                  leaveFrom="translate-x-0 opacity-100"
                  leaveTo="-translate-x-full opacity-0"
                >
                  {/* Panel wrapper pinned to the viewport bounds */}
                  <PopoverPanel className="fixed top-0 left-0 bottom-0 w-full sm:w-[320px] h-full z-50 inset-y-0 text-sm text-slate-200 shadow-2xl">
                    {/* Inner container applying the translucent dark bg and blur specifically to the sidebar element */}
                    <div
                      data-testid="nav-menu-popup"
                      className="flex flex-col h-full bg-[#13151a]/80 backdrop-blur-xl border-r border-slate-800/40 justify-between p-6 pt-8"
                    >
                    {/* TOP SECTION: Header & Close Button */}
                    <div>
                      <div className="flex justify-between items-center pb-6 mb-8 border-b border-slate-800/40" id="xmark">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500/90">Navigation</span>
                          <span className="text-sm font-medium text-slate-200">Medusa Store</span>
                        </div>
                        <button 
                          data-testid="close-menu-button" 
                          onClick={close}
                          className="p-1.5 rounded-lg bg-slate-800/30 text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
                        >
                          <XMark className="w-5 h-5" />
                        </button>
                      </div>

                      {/* MIDDLE SECTION: Main Links */}
                      <div>
                        <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase px-3 block mb-4">Main Menu</span>
                        <ul className="flex flex-col gap-1.5 items-stretch justify-start">
                          {Object.entries(SideMenuItems).map(([name, href]) => {
                            return (
                              <li key={name}>
                                <LocalizedClientLink
                                  href={href}
                                  className="block text-base font-medium px-4 py-3 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-all duration-150"
                                  onClick={close}
                                  data-testid={`${name.toLowerCase()}-link`}
                                >
                                  {name}
                                </LocalizedClientLink>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* BOTTOM SECTION: Selectors & Copyright */}
                    <div className="flex flex-col gap-y-4 pt-6 border-t border-slate-800/40">
                      <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase px-3 block">Preferences</span>

                      {/* Language Select */}
                      {!!locales?.length && (
                        <div
                          className="flex justify-between items-center px-4 py-2.5 rounded-xl hover:bg-slate-800/20 transition-colors"
                          onMouseEnter={languageToggleState.open}
                          onMouseLeave={languageToggleState.close}
                        >
                          <LanguageSelect
                            toggleState={languageToggleState}
                            locales={locales}
                            currentLocale={currentLocale}
                          />
                          <ArrowRightMini
                            className={clx(
                              "transition-transform duration-150 text-slate-500",
                              languageToggleState.state ? "-rotate-90" : ""
                            )}
                          />
                        </div>
                      )}

                      {/* Country Select */}
                      <div
                        className="flex justify-between items-center px-4 py-2.5 rounded-xl hover:bg-slate-800/20 transition-colors"
                        onMouseEnter={countryToggleState.open}
                        onMouseLeave={countryToggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={countryToggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-slate-500",
                            countryToggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>

                      {/* Footer / Copyright */}
                      <Text className="flex justify-between text-xs text-slate-500/80 mt-4 px-4">
                        © {new Date().getFullYear()} Medusa Store. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </Portal>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
