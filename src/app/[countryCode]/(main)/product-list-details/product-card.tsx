"use client"

import React, { useState } from "react"
import { Heart, ShoppingBag } from "lucide-react"
import { ProductListItem } from "./data"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import {
  Card,
  CardMedia,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card/Card"

type ProductCardProps = {
  product: ProductListItem
  index?: number
  href: string 
}

export default function ProductCard({ product, index, href }: ProductCardProps) {
  const [liked, setLiked] = useState(false)
  const [isLikedAnimating, setIsLikedAnimating] = useState(false)
  const [inCart, setInCart] = useState(false)
  const [isCartAnimating, setIsCartAnimating] = useState(false)

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation() 
    setLiked((v) => !v)
    setIsLikedAnimating(true)
    setTimeout(() => setIsLikedAnimating(false), 250)
  }

  const toggleCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setInCart((v) => !v)
    setIsCartAnimating(true)
    setTimeout(() => setIsCartAnimating(false), 250)
  }

  return (
    <Card
      size="sm"
      variant="default"
      hoverEffect="lift"
      className="relative flex h-full flex-col overflow-hidden rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
      style={index !== undefined ? { animationDelay: `${index * 75}ms` } : undefined}
    >
      <CardMedia
        src={product.image}
        alt={product.name}
        aspectRatio="square"
        className="transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col p-4 pt-3.5">
        <CardHeader className="mt-0 p-0 space-y-1">
          <CardTitle className="font-semibold group-hover:text-black transition-colors text-base tracking-tight line-clamp-1">
            <LocalizedClientLink href={href} className="focus:outline-none after:absolute after:inset-0 after:z-10 after:content-['']">
              {product.name}
            </LocalizedClientLink>
          </CardTitle>
          <CardDescription className="font-normal text-xs text-gray-500 leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {product.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="mt-auto p-0 pt-3 flex justify-between items-center gap-2">
          <div className="inline-block rounded-lg bg-gray-50 border border-gray-100/80 px-2.5 py-1 text-xs font-bold text-gray-800 shadow-sm">
            {product.price}
          </div>

          <div className="relative z-20 flex gap-2">
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
        </CardFooter>
      </div>
    </Card>
  )
}