import { products } from "../product-list-details/data"

function getSelectedProduct() {
  const product = products.find((item) => item.name === "Soft Hoodie")

  if (!product) {
    throw new Error("The Soft Hoodie product is missing from the product list data.")
  }

  return product
}

export const selectedProduct = getSelectedProduct()

export const productGallery = [
  selectedProduct.image,
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
]

export const productColors = [
  { name: "Black", value: "#232323" },
  { name: "White", value: "#f6f5f1" },
  { name: "Green", value: "#a9bba6" },
  { name: "Grey", value: "#b7b7b7" },
]

export const productSizes = ["S", "M", "L", "XL", "XXL"]

export const productInformation = [
  {
    value: "description",
    title: "Description",
    content:
      "This relaxed hoodie is made for everyday comfort, with a soft brushed interior, dropped shoulders, and an easy oversized silhouette.",
  },
  {
    value: "shipping",
    title: "Shipping",
    content:
      "Free standard delivery on orders over Rs 2,000. Orders are usually dispatched within two business days.",
  },
]

export const reviews = [
  {
    name: "Alexander Stewart",
    rating: 5,
    text: "Great fit and very soft. The green color is even better in person.",
    images: [
      productGallery[0],
      productGallery[1],
      productGallery[2],
    ],
  },
  {
    name: "Sienna Wei",
    rating: 4,
    text: "Comfortable for daily wear and the fabric feels really good.",
    images: [
      productGallery[1],
      productGallery[3],
    ],
  },
]

export const relatedProducts = products.filter(
  (product) => product.name !== selectedProduct.name
)