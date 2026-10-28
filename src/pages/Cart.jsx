import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'

const Cart = () => {

  const {
    cartItems,
    removeFromCart,
    updateQty,
    cartTotal
  } = useContext(CartContext)

  const navigate = useNavigate()

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">

        <p className="text-gray-600 mb-4">
          Your cart is empty.
        </p>

        <Link
          to="/shop"
          className="underline font-medium"
        >
          Browse plants
        </Link>

      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold text-[var(--color-forest)] mb-8">
        Your cart
      </h1>

      <div className="space-y-4">

        {cartItems.map((item) => (

          <div
            key={item.id}
            className="flex items-center gap-4 border-b border-[var(--color-sage)]/30 pb-4"
          >

            {/* Product Image */}
            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />

            </div>

            {/* Product Details */}
            <div className="flex-1">

              <p className="font-bold">
                {item.name}
              </p>

              <p className="text-sm text-gray-500">
                ₹{item.price} each
              </p>

            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2">

              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="w-7 h-7 rounded-full border border-gray-300"
              >
                −
              </button>

              <span className="w-6 text-center">
                {item.qty}
              </span>

              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="w-7 h-7 rounded-full border border-gray-300"
              >
                +
              </button>

            </div>

            {/* Price */}
            <p className="w-16 text-right font-bold">
              ₹{item.qty * item.price}
            </p>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 text-sm underline ml-2"
            >
              Remove
            </button>

          </div>

        ))}

      </div>

      {/* Total */}
      <div className="flex justify-between items-center mt-8">

        <span className="text-lg font-bold">
          Total: ₹{cartTotal}
        </span>

        <button
          onClick={() => navigate('/address')}
          className="bg-[var(--color-mustard)] text-[var(--color-ink)] font-bold px-6 py-3 rounded-full"
        >
          Checkout
        </button>

      </div>

    </div>
  )
}

export default Cart