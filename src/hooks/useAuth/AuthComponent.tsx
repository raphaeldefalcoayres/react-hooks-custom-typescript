import React from 'react'
import { useAuth } from './useAuth'

const AuthComponent: React.FC = () => {
  const { signed, user, Login, Logout } = useAuth()

  console.log(signed, user)

  async function handleLogin() {
    await Login('https://yd37o.mocklab.io/api/users/sign-in', {
      email: 'teste',
      password: 'teste',
    })
  }

  return (
    <div>
      <h2>Teste te login com base em contexto</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={Logout}>Logout</button>
    </div>
  )
}

export default AuthComponent
