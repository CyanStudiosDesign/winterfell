export type ProductListItem = {
  id: string          // Unique identifier for React loops (fixes the warning)
  slug: string        // URL-friendly string for routing
  name: string
  price: string
  image: string
  description: string
}

export type FilterSection = {
  value: string
  title: string
  items: {
    label: string
    count: number
  }[]
}

export const filterChips = ["New Arrivals", "Sale"]

export const filterSections: FilterSection[] = [
  {
    value: "brand",
    title: "Brand",
    items: [
      { label: "Adidas", count: 120 },
      { label: "Zara", count: 50 },
      { label: "Nike", count: 6 },
      { label: "Vans", count: 8 },
      { label: "Uniqlo", count: 4 },
    ],
  },
  {
    value: "category",
    title: "Category",
    items: [
      { label: "Sweaters", count: 50 },
      { label: "T-Shirts", count: 30 },
      { label: "Jacket", count: 14 },
      { label: "Outerwear", count: 8 },
      { label: "Boots", count: 6 },
    ],
  },
]

export const products: ProductListItem[] = [
  {
    id: "prod-1",
    slug: "japan-green-outer",
    name: "Japan Green Outer",
    price: "Rs 399.000",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    description: "Silk and linen blend polo shirt with stripes that fits slim.",
  },
  {
    id: "prod-2",
    slug: "black-to-basic-tee",
    name: "Black to basic tee",
    price: "Rs 150.000",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    description: "Silk and linen blend polo shirt with stripes that fits slim.",
  },
  {
    id: "prod-3",
    slug: "soft-hoodie",
    name: "Soft Hoodie",
    price: "Rs 250.000",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=600&auto=format&fit=crop",
    description: "Silk and linen blend polo shirt with stripes that fits slim.",
  },
  {
    id: "prod-4",
    slug: "white-off-jacket-2024",
    name: "White off jacket 2024",
    price: "Rs 150.000",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop",
    description: "Silk and linen blend polo shirt with stripes that fits slim.",
  },
  {
    id: "prod-5",
    slug: "one-set-lawyer-suits",
    name: "One set lawyer suits",
    price: "Rs 150.000",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop",
    description: "Silk and linen blend polo shirt with stripes that fits slim.",
  },
  {
    id: "prod-6",
    slug: "dreamy-brown-shirt",
    name: "Dreamy Brown Shirt",
    price: "Rs 250.000",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    description: "Silk and linen blend polo shirt with stripes that fits slim.",
  },
]