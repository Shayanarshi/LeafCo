import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('leafco_user')

    return saved ? JSON.parse(saved) : null
  })

  const login = (userData) => {
    setUser(userData)

    localStorage.setItem(
      'leafco_user',
      JSON.stringify(userData)
    )
  }

  const logout = () => {
    setUser(null)

    localStorage.removeItem('leafco_user')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}