import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'
import { AuthContext } from '../Contexts/AuthContext'

const Header = () => {
  const { cartCount } = useContext(CartContext)
  const { user, logout } = useContext(AuthContext)

  return (
    <header className="w-full h-[10vh] bg-[var(--color-cream)] border-b border-[var(--color-sage)]/30 flex justify-between items-center px-6 md:px-12 fixed top-0 left-0 z-50">

      <NavLink to="/" className="text-xl font-bold text-[var(--color-forest)]">
        Leaf &amp; Co.
      </NavLink>

      <nav className="flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/cart">
          Cart {cartCount > 0 && `(${cartCount})`}
        </NavLink>

        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <NavLink
            to="/login"
            className="bg-[var(--color-forest)] text-white px-4 py-2 rounded-full"
          >
            Login
          </NavLink>
        )}
      </nav>

    </header>
  )
}

export default Header