import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'

const Login = () => {

  const { login } = useContext(AuthContext)

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    setError('')
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (!formData.email || !formData.password) {
      setError('Please fill in both fields.')
      return
    }

    let users = JSON.parse(
      localStorage.getItem('leafco_users')
    ) || []

    const user = users.find(
      (user) =>
        user.email.toLowerCase() ===
          formData.email.trim().toLowerCase() &&
        user.password === formData.password
    )

    if (!user) {
      setError('Invalid email or password.')
      return
    }

    login({
      firstName: user.firstName,
      email: user.email
    })

    navigate('/')
  }

  return (

    <section className="min-h-[80vh] flex justify-center items-center px-6">

      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to your account
        </p>


        <form
          onSubmit={handleSubmit}
          className="border rounded-2xl p-8 shadow-sm flex flex-col gap-5"
        >

          {/* Email */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

          </div>


          {/* Password */}

          <div>

  <label className="block text-sm font-medium mb-2">
    Password
  </label>

  <div className="relative">

    <input
      type={showPassword ? "text" : "password"}
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Enter your password"
      className="w-full border rounded-lg px-4 py-3 pr-12 outline-none"
    />

    <button
      type="button"
      onMouseDown={() => setShowPassword(true)}
      onMouseUp={() => setShowPassword(false)}
      onMouseLeave={() => setShowPassword(false)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
    >
      👁️
    </button>

  </div>

</div>


          {/* Error */}

          {error && (

            <p className="text-red-600 text-sm">
              {error}
            </p>

          )}


          {/* Login */}

          <button
            type="submit"
            className="bg-[var(--color-forest)] text-white py-3 rounded-full font-bold"
          >
            Login
          </button>


          {/* Signup */}

          <p className="text-center text-sm text-gray-500">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="underline font-medium"
            >
              Create account
            </Link>

          </p>

        </form>

      </div>

    </section>
  )
}

export default Login