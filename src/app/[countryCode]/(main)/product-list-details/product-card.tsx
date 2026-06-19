"use client"

import { useState } from "react"
import { Heart, ShoppingBag } from "lucide-react"
import { ProductListItem } from "./data"

type ProductCardProps = {
  product: ProductListItem
}

export default function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(false)
  const [inCart, setInCart] = useState(false)

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
          <button
            type="button"
            aria-pressed={liked}
            aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
            onClick={() => setLiked((v) => !v)}
            className={`grid size-8 place-items-center rounded-full border transition-colors ${
              liked ? "border-gray-300 text-red-500" : "border-gray-300 text-gray-600"
            }`}
          >
            <Heart className="size-4" fill={liked ? "currentColor" : "none"} />
          </button>

          <button
            type="button"
            aria-pressed={inCart}
            aria-label={inCart ? "Remove from cart" : "Add to cart"}
            onClick={() => setInCart((v) => !v)}
            className={`grid size-8 place-items-center rounded-full border transition-colors ${
              inCart
                ? "border-black bg-black text-white"
                : "border-gray-300 text-gray-600"
            }`}
          >
            <ShoppingBag className="size-4" />
          </button>
        </div>
      </div>
    </article>
  )
}
