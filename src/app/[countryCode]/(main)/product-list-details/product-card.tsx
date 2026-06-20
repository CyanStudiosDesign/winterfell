"use client"

import { useState } from "react"
import { Heart, ShoppingBag } from "lucide-react"
import { ProductListItem } from "./data"

type ProductCardProps = {
  product: ProductListItem
  index?: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [liked, setLiked] = useState(false)
  const [isLikedAnimating, setIsLikedAnimating] = useState(false)
  const [inCart, setInCart] = useState(false)
  const [isCartAnimating, setIsCartAnimating] = useState(false)

  const toggleLike = () => {
    setLiked((v) => !v)
    setIsLikedAnimating(true)
    setTimeout(() => setIsLikedAnimating(false), 250)
  }

  const toggleCart = () => {
    setInCart((v) => !v)
    setIsCartAnimating(true)
    setTimeout(() => setIsCartAnimating(false), 250)
  }

  return (
    <article
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-3.5 border border-gray-100/60 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1.5 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
      style={index !== undefined ? { animationDelay: `${index * 75}ms` } : undefined}
    >
      <div className="relative overflow-hidden rounded-xl aspect-square w-full bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      </div>

      <div className="flex-1 flex flex-col justify-between mt-3.5">
        <div>
          <h3 className="text-base font-bold text-gray-900 group-hover:text-black transition-colors">{product.name}</h3>
          <p className="mt-1 text-xs text-gray-500 line-clamp-2 leading-relaxed">{product.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="rounded-lg bg-gray-50 border border-gray-100/80 px-2.5 py-1 text-xs font-bold text-gray-800 shadow-sm">
            {product.price}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-pressed={liked}
              aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
              onClick={toggleLike}
              className={`grid size-8 place-items-center rounded-full border transition-all duration-200 active:scale-75 ${
                liked
                  ? "border-red-200 bg-red-50 text-red-500 shadow-sm"
                  : "border-gray-200 bg-white text-gray-500 hover:border-gray-400 hover:text-gray-900"
              } ${isLikedAnimating ? "scale-125" : "scale-100"}`}
            >
              <Heart className="size-4 transition-transform duration-100" fill={liked ? "currentColor" : "none"} />
            </button>

            <button
              type="button"
              aria-pressed={inCart}
              aria-label={inCart ? "Remove from cart" : "Add to cart"}
              onClick={toggleCart}
              className={`grid size-8 place-items-center rounded-full border transition-all duration-200 active:scale-75 ${
                inCart
                  ? "border-gray-900 bg-gray-900 text-white shadow-sm"
                  : "border-gray-200 bg-white text-gray-500 hover:border-gray-400 hover:text-gray-900"
              } ${isCartAnimating ? "scale-125" : "scale-100"}`}
            >
              <ShoppingBag className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
