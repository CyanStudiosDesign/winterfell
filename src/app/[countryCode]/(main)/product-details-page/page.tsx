import ProductCard from "../product-list-details/product-card"
import { relatedProducts } from "./data"
import ProductDetail from "./product-detail"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumbs/BreadCrumbs"

export default function ProductDetailsPage() {
  return (
    <main className="">
      <section className="bg-white max-w-7xl mx-auto px-4">
        <Breadcrumb className="my-3 font-medium text-gray-600">
          <BreadcrumbList>
            {/* Home Link */}
            <BreadcrumbItem>
              <BreadcrumbLink className="hover:underline" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink className="hover:underline" href="/product-list-details">
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold">Xyz Item</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <ProductDetail />

        <section className="mt-14 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-semibold">More All You Needs.</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.name} product={product} href="/product-details-page" />
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
