import { products } from "./data"
import ProductCard from "./product-card"
import ProductListSidebar from "./product-list-sidebar"

export default function ProductListDetailsPage() {
  return (
    <main className="min-h-screen bg-[#d9dddc] px-4 py-10">
      <section className="mx-auto max-w-6xl rounded-lg bg-white p-6 shadow-sm">
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
          <ProductListSidebar />

          <section className="animate-in fade-in slide-in-from-right-4 duration-500 delay-75 fill-mode-both">
            <p className="mb-1 text-xs text-gray-500">Home / Wink Collection</p>
            <h2 className="mb-5 text-xl font-semibold">Wink Collection</h2>

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
