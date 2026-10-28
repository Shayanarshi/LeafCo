import React from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const featured = products.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--color-forest)]">
            Green corners for small homes.
          </h1>
          <p className="mt-4 text-gray-600 max-w-sm">
            Low-maintenance indoor plants, picked for apartments, shared flats and first-time plant owners.
            No garden required.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-6 bg-[var(--color-mustard)] text-[var(--color-ink)] font-bold px-6 py-3 rounded-full"
          >
            Shop plants
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
            {products.slice(0, 4).map((p) => (
                <div
                 key={p.id}
               className="aspect-square rounded-lg overflow-hidden"
    >
                 <img
        src={p.image}
        alt={p.name}
        className="w-full h-full object-cover"
                />
              </div>
               ))}
            </div>
        
      </section>

      {/* Featured products */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[var(--color-forest)]">Featured</h2>
          <Link to="/shop" className="text-sm font-medium underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
