"use client"

import { useState, useEffect } from "react"
import {
  Heart,
  ShoppingBag,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/buttons/Buttons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Rating } from "@/components/ui/rating"
import {
  productColors,
  productGallery,
  productInformation,
  productSizes,
  reviews,
  selectedProduct,
} from "./data"

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(productColors[2].name)
  const [selectedSize, setSelectedSize] = useState("M")
  const [isFavourite, setIsFavourite] = useState(false)
  const [isFavAnimating, setIsFavAnimating] = useState(false)
  const [isInBag, setIsInBag] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Handle ESC key for Lightbox close
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null)
      if (e.key === "ArrowLeft") handlePrevImage()
      if (e.key === "ArrowRight") handleNextImage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex])

  const handlePrevImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) =>
      prev === 0 ? productGallery.length - 1 : prev! - 1
    )
  }

  const handleNextImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) =>
      prev === productGallery.length - 1 ? 0 : prev! + 1
    )
  }

  const triggerFavorite = () => {
    setIsFavourite((prev) => !prev)
    setIsFavAnimating(true)
    setTimeout(() => setIsFavAnimating(false), 300)
  }

  const handleAddToCart = () => {
    if (isInBag) {
      setIsInBag(false)
      return
    }
    setIsAdding(true)
    setTimeout(() => {
      setIsAdding(false)
      setIsInBag(true)
    }, 800)
  }

  return (
    <section className="animate-in fade-in duration-500">
      {/* Product Image Grid */}
      <div className="grid grid-cols-2 gap-3 md:h-[420px] md:grid-cols-4 md:grid-rows-2">
        {productGallery.map((image, index) => (
          <div
            key={image}
            onClick={() => setLightboxIndex(index)}
            className={`group relative overflow-hidden rounded-lg cursor-pointer bg-gray-100 ${
              index === 0
                ? "col-span-2 aspect-[4/5] md:row-span-2 md:aspect-auto"
                : index === productGallery.length - 1
                ? "col-span-2 aspect-[4/3] md:aspect-auto"
                : "col-span-1 aspect-square md:aspect-auto"
            }`}
          >
            <img
              src={image}
              alt={
                index === 0
                  ? selectedProduct.name
                  : `${selectedProduct.name} detail ${index}`
              }
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-6 small:flex-row small:items-start">
        {" "}
        {/* Left Info Panel */}
        <section className="rounded-2xl bg-[#f4f4f2]/80 backdrop-blur-sm p-6 shadow-sm border border-gray-100 small:w-1/2">
          {" "}
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 transition-colors">
                  {selectedProduct.name}
                </h1>
                <div className="mt-3 flex items-center gap-2">
                  <Rating.Half
                    value={4.9}
                    totalStars={5}
                    className="scale-75 origin-left"
                  />
                  <span className="text-sm font-medium text-gray-600">
                    4.9 (44 reviews)
                  </span>
                </div>
              </div>

              <button
                type="button"
                aria-label={
                  isFavourite ? "Remove from wishlist" : "Add to wishlist"
                }
                aria-pressed={isFavourite}
                onClick={triggerFavorite}
                className={`grid size-11 place-items-center rounded-full border transition-all duration-300 active:scale-75 ${
                  isFavourite
                    ? "border-red-200 bg-red-50 text-red-500 shadow-sm"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:text-gray-900"
                } ${isFavAnimating ? "scale-125" : "scale-100"}`}
              >
                <Heart
                  className="size-5 transition-transform duration-200"
                  fill={isFavourite ? "currentColor" : "none"}
                />
              </button>
            </div>

            {/* Colors */}
            <fieldset className="mt-8">
              <legend className="text-sm font-semibold text-gray-800">
                Color:{" "}
                <span className="font-normal text-gray-600">
                  {selectedColor}
                </span>
              </legend>
              <div className="mt-3 flex gap-3">
                {productColors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    aria-label={`Select ${color.name}`}
                    aria-pressed={selectedColor === color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`grid size-9 place-items-center rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 ${
                      selectedColor === color.name
                        ? "border-gray-900 scale-105 shadow-sm"
                        : "border-transparent"
                    }`}
                  >
                    <span
                      className="size-6 rounded-full border border-black/10 shadow-inner"
                      style={{ backgroundColor: color.value }}
                    />
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Sizes */}
            <fieldset className="mt-8">
              <legend className="text-sm font-semibold text-gray-800">
                Size:{" "}
                <span className="font-normal text-gray-600">
                  {selectedSize}
                </span>
              </legend>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {productSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                    className={`flex items-center justify-center min-w-[3.25rem] h-10 px-3 rounded-lg border text-sm font-semibold transition-all duration-300 active:scale-95 ${
                      selectedSize === size
                        ? "bg-gray-900 text-white border-gray-900 shadow-md scale-100"
                        : "bg-white text-gray-800 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
          <Accordion
            type="multiple"
            className="mt-8 rounded-none border-x-0 border-t border-gray-200 bg-transparent"
          >
            {productInformation.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.title}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="px-0 font-semibold text-gray-800 hover:text-gray-900">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-4 text-sm leading-6 text-gray-600">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        {/* Right Action / Reviews Panel */}
        <section className="rounded-2xl bg-[#f4f4f2]/80 backdrop-blur-sm p-6 shadow-sm border border-gray-100 small:w-1/2 flex flex-col justify-between">
          <div>
            {/* Purchase banner */}
            <div className="rounded-xl flex items-center justify-between gap-4 bg-gray-950 p-4 text-white shadow-lg transition-all duration-300">
              <p className="text-2xl font-bold tracking-tight">
                {selectedProduct.price}
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`min-w-[7.5rem] border-white bg-white text-black hover:bg-gray-100 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 ${
                  isInBag
                    ? "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700"
                    : ""
                }`}
              >
                {isAdding ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Adding...</span>
                  </>
                ) : isInBag ? (
                  <>
                    <Check className="size-4" />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="size-4" />
                    <span>Buy now</span>
                  </>
                )}
              </Button>
            </div>

            {/* Reviews list */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-800">
                  Reviews (44)
                </h2>

                <button
                  type="button"
                  className="text-sm font-medium text-gray-700 underline underline-offset-4 hover:text-gray-900 transition-colors"
                >
                  See more
                </button>
              </div>

              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <article
                    key={review.name}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://i.pravatar.cc/150?img=${index + 10}`}
                        alt={review.name}
                        className="size-10 rounded-full object-cover shadow-sm"
                      />

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {review.name}
                        </p>

                        <Rating.Half
                          value={review.rating}
                          totalStars={5}
                          className="scale-50 origin-left"
                        />
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {review.text}
                    </p>

                    {review.images?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {review.images.map((image, imageIndex) => (
                          <img
                            key={imageIndex}
                            src={image}
                            alt={`Review image ${imageIndex + 1}`}
                            className="h-20 w-20 rounded-lg object-cover border border-gray-200 transition-transform duration-200 hover:scale-105"
                          />
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300 animate-in fade-in">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute right-5 top-5 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 active:scale-95"
            aria-label="Close lightbox"
          >
            <X className="size-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrevImage}
            className="absolute left-5 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Image Container */}
          <div className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-xl shadow-2xl">
            <img
              src={productGallery[lightboxIndex]}
              alt={`Lightbox detail ${lightboxIndex}`}
              className="max-h-[85vh] max-w-[90vw] object-contain transition-all duration-500 transform animate-in zoom-in-95"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNextImage}
            className="absolute right-5 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>
          {/* Indicator text */}
          <div className="absolute bottom-5 text-sm font-semibold text-white/60">
            {lightboxIndex + 1} / {productGallery.length}
          </div>
        </div>
      )}
    </section>
  )
}