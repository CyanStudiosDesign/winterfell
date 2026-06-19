import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { ShoppingCart, User, Bell } from "lucide-react"
import { Button } from "@/components/ui/buttons/Buttons" 
import { Separator } from "@/components/ui/separator/Separator"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  const linkHoverEffect = 
    "transition-all duration-200 ease-out hover:scale-[1.03] active:scale-95"

  const iconHoverEffect = 
    "transition-all duration-200 ease-out hover:bg-neutral-50 hover:scale-105 active:scale-95"

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header className="h-12 w-full border-b bg-white/80 backdrop-blur-md border-neutral-100 transition-all duration-200">
        <nav className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between text-sm font-medium">
          
          {/* Left: Side Menu Toggle */}
          <div className="flex-1 flex items-center justify-start h-full">
            <SideMenu
              regions={regions}
              locales={locales}
              currentLocale={currentLocale}
            />
          </div>

          {/* Center: Brand Identity */}
          <div className="flex items-center justify-center h-full shrink-0">
            <LocalizedClientLink
              href="/"
              className="text-xl font-bold tracking-[0.15em] text-neutral-900 uppercase transition-all duration-200 hover:opacity-75 active:scale-98 font-sans"
              data-testid="nav-store-link"
            >
              Medusa Store
            </LocalizedClientLink>
          </div>

          {/* Right: Actions Block */}
          <div className="flex-1 flex items-center justify-end gap-x-2 md:gap-x-4 h-full">
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-x-1">
              <LocalizedClientLink href="/blogs">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`text-neutral-600 hover:text-neutral-900 font-medium px-3 text-sm bg-transparent hover:bg-transparent ${linkHoverEffect}`}
                >
                  Blogs
                </Button>
              </LocalizedClientLink>
              
              <LocalizedClientLink href="/faqs">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`text-neutral-600 hover:text-neutral-900 font-medium px-3 text-sm bg-transparent hover:bg-transparent ${linkHoverEffect}`}
                >
                  FAQs
                </Button>
              </LocalizedClientLink>
            </div>

            {/* Vertical Divider */}
            <Separator className="hidden md:block h-5 w-px bg-neutral-200" />

            {/* Utility Icons */}
            <div className="flex items-center gap-x-1 md:gap-x-4 h-full text-neutral-800">
              
              <LocalizedClientLink
                href="/bell"
                data-testid="nav-bell-link"
                className="hidden sm:block"
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`p-2 bg-transparent text-neutral-700 hover:text-neutral-900 rounded-full ${iconHoverEffect}`}
                >
                  <Bell className="w-[19px] h-[19px] stroke-[1.5]" />
                </Button>
              </LocalizedClientLink>

              {/* Cart Button with global fallback styling match */}
              <Suspense
                fallback={
                  <LocalizedClientLink
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`p-2 bg-transparent text-neutral-700 hover:text-neutral-900 rounded-full ${iconHoverEffect}`}
                    >
                      <ShoppingCart className="w-[19px] h-[19px] stroke-[1.5] animate-pulse" />
                    </Button>
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>

              <LocalizedClientLink
                href="/account"
                data-testid="nav-account-link"
                className="hidden sm:block"
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`p-2 bg-transparent text-neutral-700 hover:text-neutral-900 rounded-full ${iconHoverEffect}`}
                >
                  <User className="w-[19px] h-[19px] stroke-[1.5]" />
                </Button>
              </LocalizedClientLink>
              
            </div>
          </div>

        </nav>
      </header>
    </div>
  )
}