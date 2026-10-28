import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  // cartItems: [{ id, name, price, emoji, qty }]
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        // already in cart — just bump the quantity
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      // new item — add it with qty 1
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQty = (id, qty) => {
    if (qty < 1) return
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    )
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0)

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQty, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}
