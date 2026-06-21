import ProductCard from "../product-list-details/product-card"
import { relatedProducts } from "./data"
import ProductDetail from "./product-detail"

import Carousel from "@/components/ui/carousel/Carousel"

export default function ProductDetailsPage() {
  return (
    <main>
      <section className="bg-white max-w-7xl mx-auto px-4 mt-5">
        <p className="mb-5 text-xs text-gray-500">Home / Product details</p>

        <ProductDetail />

        <section className="mt-14 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-semibold">More All You Needs.</h2>

          <div className="mt-6 px-12">
            <Carousel
              perView={3}
              scrollBy={1}
              gap={24}
              navStyle="outside"
              indicator="dots"
              slides={relatedProducts.slice(0, 5).map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            />
          </div>
        </section>
      </section>
    </main>
  )
}