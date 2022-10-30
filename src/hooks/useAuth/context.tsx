import React, { createContext, useEffect, useState } from 'react'

interface AuthContextData {
  signed: boolean
  user: object | null
  Login(url: string, user: object): Promise<void>
  Logout(): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState<object | null>(null)

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user')
    const storagedToken = sessionStorage.getItem('@App:token')

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser))
      // api.defaults.headers.Authorization = `Bearer ${storagedToken}`
    }
  }, [])

  async function Login(url: string, userData: object) {
    const response = await fetch(url, { method: 'post', body: JSON.stringify(userData) })
    const data = await response.json()

    setUser(data.result)
    // api.defaults.headers.Authorization = `Bearer ${value.data.token}`

    sessionStorage.setItem('@App:user', JSON.stringify(data.result))
    sessionStorage.setItem('@App:token', data.result.token)
  }

  function Logout() {
    setUser(null)

    sessionStorage.removeItem('@App:user')
    sessionStorage.removeItem('@App:token')
  }

  return <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>{children}</AuthContext.Provider>
}
