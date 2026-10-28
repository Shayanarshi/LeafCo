import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'

const ProductCard = ({ product }) => {

  const { addToCart, cartItems } = useContext(CartContext)

  const cartItem = cartItems.find(
    (item) => item.id === product.id
  )

  const qty = cartItem ? cartItem.qty : 0

  return (
    <div className="border border-[var(--color-sage)]/40 rounded-lg overflow-hidden flex flex-col bg-white">

      <Link to={`/product/${product.id}`}>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover"
        />

      </Link>

      <div className="p-4 flex flex-col flex-1">

        <Link
          to={`/product/${product.id}`}
          className="font-bold hover:underline"
        >
          {product.name}
        </Link>

        <p className="text-sm text-gray-500 mt-1 flex-1">
          {product.tagline}
        </p>

        <div className="flex items-center justify-between mt-4">

          <span className="font-bold">
            ₹{product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="bg-[var(--color-forest)] text-white text-sm px-3 py-1.5 rounded-full hover:bg-[var(--color-forest)]/90"
          >
            {qty > 0 ? `Added ${qty}` : 'Add to cart'}
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard