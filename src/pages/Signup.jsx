import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import InfoTooltip from '../components/InfoTooltip'

const Signup = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    email: '',
    mobile: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    setError('')
    setSuccess('')
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    // Check empty fields
    if (
      !formData.firstName ||
      !formData.surname ||
      !formData.day ||
      !formData.month ||
      !formData.year ||
      !formData.gender ||
      !formData.email ||
      !formData.mobile ||
      !formData.password
    ) {
      setError('Please fill in all fields.')
      return
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email.')
      return
    }

    // Mobile validation
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      setError('Please enter a valid mobile number.')
      return
    }

    // Password validation
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    // Get existing users
    let users = JSON.parse(
      localStorage.getItem('leafco_users')
    ) || []

    // Check email already exists
    const emailExists = users.find(
      (user) =>
        user.email.toLowerCase() ===
        formData.email.trim().toLowerCase()
    )

    if (emailExists) {
      setError('Email already registered.')
      return
    }

    // Check mobile already exists
    const mobileExists = users.find(
      (user) => user.mobile === formData.mobile
    )

    if (mobileExists) {
      setError('Mobile number already registered.')
      return
    }

    // Create new user
    const newUser = {
      firstName: formData.firstName,
      surname: formData.surname,
      day: formData.day,
      month: formData.month,
      year: formData.year,
      gender: formData.gender,
      email: formData.email.trim().toLowerCase(),
      mobile: formData.mobile,
      password: formData.password
    }

    // Save user
    users.push(newUser)

    localStorage.setItem(
      'leafco_users',
      JSON.stringify(users)
    )

    // Show success message
    setError('')
    setSuccess(
      'Account created successfully! You can now log in.'
    )

    // Navigate to login page after 1.5 seconds
    setTimeout(() => {
      navigate('/login')
    }, 1500)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto my-12 bg-white rounded-xl shadow p-6 sm:p-8 space-y-5"
    >

      <div>
        <h1 className="text-2xl font-bold text-[var(--color-forest)]">
          Create a new account
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Join Leaf &amp; Co. — it's quick and easy.
        </p>
      </div>

      {/* Name */}
      <fieldset>

        <legend className="font-bold text-sm mb-2">
          Name
        </legend>

        <div className="flex gap-3">

          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />

          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />

        </div>

      </fieldset>

      {/* Date of Birth */}
      <fieldset>

        <legend className="font-bold text-sm mb-2 flex items-center gap-2">
          Date of birth

          <InfoTooltip text="Your birthday won't be shared with anyone unless you choose to." />
        </legend>

        <div className="flex gap-3">

          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-3 text-sm"
          >
            <option value="">Day</option>

            {Array.from(
              { length: 31 },
              (_, i) => i + 1
            ).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}

          </select>

          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-3 text-sm"
          >
            <option value="">Month</option>

            {[
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ].map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}

          </select>

          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-3 text-sm"
          >
            <option value="">Year</option>

            {Array.from(
              { length: 100 },
              (_, i) => new Date().getFullYear() - i
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}

          </select>

        </div>

      </fieldset>

      {/* Gender */}
      <fieldset>

        <legend className="font-bold text-sm mb-2 flex items-center gap-2">
          Gender

          <InfoTooltip text="This helps us personalize your experience." />
        </legend>

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
        >
          <option value="">
            Select your gender
          </option>

          <option value="female">
            Female
          </option>

          <option value="male">
            Male
          </option>

          <option value="custom">
            Custom
          </option>

        </select>

      </fieldset>

      {/* Email */}
      <div>

        <label className="font-bold text-sm block mb-2">
          Email address
        </label>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
        />

      </div>

      {/* Mobile */}
      <div>

        <label className="font-bold text-sm block mb-2">
          Mobile number
        </label>

        <input
          type="text"
          name="mobile"
          placeholder="Mobile number"
          value={formData.mobile}
          onChange={handleChange}
          maxLength="10"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
        />

      </div>

      {/* Password */}
      <div>

        <label className="font-bold text-sm block mb-2">
          Password
        </label>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
        />

      </div>

      {/* Error message */}
      {error && (
        <p className="text-red-600 text-sm">
          {error}
        </p>
      )}

      {/* Success message */}
      {success && (
        <p className="text-green-600 text-sm">
          {success}
        </p>
      )}

      {/* Create Account */}
      <button
        type="submit"
        className="w-full bg-[var(--color-forest)] text-white font-bold py-3 rounded-full"
      >
        Create account
      </button>

      {/* Login link */}
      <p className="text-sm text-gray-500 text-center">
        Already have an account?{' '}

        <Link
          to="/login"
          className="underline font-medium"
        >
          Log in
        </Link>

      </p>

    </form>
  )
}

export default Signup