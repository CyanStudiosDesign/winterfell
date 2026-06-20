import { products } from "./data"
import ProductCard from "./product-card"
import ProductListSidebar from "./product-list-sidebar"
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer"


export default function ProductListDetailsPage() {
  return (
    <main className="">
      <section className="rounded-lg bg-white shadow-sm max-w-7xl mx-auto px-4 my-5">
        {/* <header className="mb-6 flex items-center justify-between gap-4">
          <button className="text-xl">≡</button>

          <h1 className="text-2xl font-semibold tracking-tight">Wink</h1>

          <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
            <a>Blogs</a>
            <a>FAQs</a>
            <a>Search</a>
            <a>Cart</a>
          </nav>
        </header> */}

        {/* <div className="mb-6 flex flex-wrap items-center gap-3">
          <select className="rounded-full border px-4 py-2 text-sm">
            <option>Clothing</option>
          </select>

          <button className="rounded-full border px-4 py-2 text-sm">New Arrivals</button>
          <button className="rounded-full border px-4 py-2 text-sm">Sale</button>

          <input
            className="min-w-[220px] flex-1 rounded-full border px-4 py-2 text-sm"
            placeholder="Search..."
          />

          <button className="rounded-full border px-4 py-2 text-sm">Men</button>
          <button className="rounded-full border px-4 py-2 text-sm">Women</button>
          <button className="rounded-full border px-4 py-2 text-sm">Children</button>
          <button className="rounded-full border px-4 py-2 text-sm">Brand</button>
        </div> */}

        <section className="mb-8 grid overflow-hidden rounded-lg bg-[#f2f2f2] md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=900&auto=format&fit=crop"
            alt="Clothing collection"
            className="h-56 w-full object-cover"
          />

          <div className="flex flex-col justify-center p-8">
            <p className="mb-2 text-xs text-gray-500">Collections</p>
            <h2 className="max-w-md text-2xl font-semibold">
              Explore The Various Collection Of Wink Collection
            </h2>
            <p className="mt-3 max-w-sm text-sm text-gray-500">
              Do not miss out shopping collection from us. You will not be let down.
            </p>
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-[190px_1fr] animate-in fade-in duration-500">
          <div className="hidden md:block">
            <ProductListSidebar />
          </div>

          <section className="animate-in fade-in slide-in-from-right-4 duration-500 delay-75 fill-mode-both">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="mb-1 text-xs text-gray-500">Home / Wink Collection</p>
                <h2 className="text-xl font-semibold">Wink Collection</h2>
              </div>
              
              {/* Mobile Filter Drawer */}
              <div className="block md:hidden">
                <Drawer>
                  <DrawerTrigger>
                    <button className="flex items-center gap-x-2 px-4 py-2 border border-neutral-200 rounded-full text-xs font-semibold hover:bg-neutral-50 active:scale-95 transition-all text-neutral-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-neutral-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                      </svg>
                      Filters
                    </button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="p-6 max-h-[60vh] overflow-y-auto">
                      <h3 className="text-base font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-100">Filters</h3>
                      <ProductListSidebar />
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <ProductCard key={product.name} product={product} index={index} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
