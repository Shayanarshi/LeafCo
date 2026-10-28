import React, { useContext, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import { CartContext } from '../Contexts/CartContext'

const ProductDetails = () => {

  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const [added, setAdded] = useState(false)

  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-600">
          We couldn't find that plant.
        </p>
        <Link to="/shop" className="underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

      <img
        src={product.image}
        alt={product.name}
        className="rounded-lg w-full h-72 object-cover"
      />

      <div>

        <h1 className="text-3xl font-bold text-[var(--color-forest)]">
          {product.name}
        </h1>

        <p className="text-gray-500 mt-1">
          {product.tagline}
        </p>

        <p className="text-2xl font-bold mt-4">
          ₹{product.price}
        </p>

        <p className="text-gray-600 mt-4 leading-relaxed">
          {product.description}
        </p>

        <button
          onClick={handleAdd}
          className="mt-6 bg-[var(--color-forest)] text-white font-bold px-6 py-3 rounded-full"
        >
          {added ? 'Added ✓' : 'Add to cart'}
        </button>

      </div>

    </div>
  )
}

export default ProductDetails
