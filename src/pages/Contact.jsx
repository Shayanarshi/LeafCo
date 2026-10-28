import React, { useState } from 'react'

const initialState = { name: '', email: '', message: '' }

const Contact = () => {
  const [formData, setFormData] = useState(initialState)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSent(true)
    setFormData(initialState)
  }

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[var(--color-forest)] mb-6">Contact us</h1>

      {sent && (
        <p className="bg-[var(--color-sage)]/20 text-[var(--color-forest)] text-sm rounded-lg px-4 py-3 mb-4">
          Thanks — this is a demo, so nothing was actually sent.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-bold block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]"
          />
        </div>
        <div>
          <label className="text-sm font-bold block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]"
          />
        </div>
        <div>
          <label className="text-sm font-bold block mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[var(--color-forest)] text-white font-bold py-3 rounded-full"
        >
          Send message
        </button>
      </form>
    </div>
  )
}

export default Contact
