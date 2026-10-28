import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Address = () => {

  const navigate = useNavigate()

  const [address, setAddress] = useState({
    name: '',
    mobile: '',
    address: '',
    city: '',
    pincode: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setAddress({
      ...address,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !address.name ||
      !address.mobile ||
      !address.address ||
      !address.city ||
      !address.pincode
    ) {
      alert('Please fill in all details')
      return
    }

    alert('Order placed successfully!')

    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold text-[var(--color-forest)] mb-6">
        Delivery Address
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={address.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile number"
          value={address.mobile}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <textarea
          name="address"
          placeholder="House no., street, area"
          value={address.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
          rows="3"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={address.pincode}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <button
          type="submit"
          className="w-full bg-[var(--color-mustard)] text-[var(--color-ink)] font-bold py-3 rounded-full"
        >
          Place Order
        </button>

      </form>

    </div>
  )
}

export default Address