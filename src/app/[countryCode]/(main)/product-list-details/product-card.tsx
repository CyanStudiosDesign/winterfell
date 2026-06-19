import { ProductListItem } from "./data"

type ProductCardProps = {
  product: ProductListItem
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <img
        src={product.image}
        alt={product.name}
        className="aspect-square w-full rounded-lg object-cover"
      />

      <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
      <p className="mt-1 text-xs text-gray-500">{product.description}</p>

      <div className="mt-3 flex items-center justify-between">
        <button className="rounded-md border px-4 py-2 text-xs font-medium">
          {product.price}
        </button>

        <div className="flex gap-2">
          <button className="grid size-8 place-items-center rounded-full border">
            ♥
          </button>
          <button className="grid size-8 place-items-center rounded-full border">
            +
          </button>
        </div>
      </div>
    </article>
  )
}
