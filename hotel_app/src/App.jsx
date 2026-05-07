import { useState } from 'react'
import './App.css'
import NewUser from './new_user.jsx'

function App() {
  const [showNewUser, setShowNewUser] = useState(false)
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (showNewUser) {
    return <NewUser onBack={() => setShowNewUser(false)} />
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Hotel App</h1>
        </div>
        <div className="center">
          <h1>Inicio de sesión</h1>

          <label htmlFor="email">Ingrese su correo</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo..."
          />

          <label htmlFor="password">Ingrese su contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña..."
          />

          <div className="actions">
            <button type="button" className="btn" onClick={() => alert('Login clicked')}>
              Iniciar sesión
            </button>
          </div>
          <p className="link-text" onClick={() => setShowNewUser(true)}>
            Registrarse
          </p>
        </div>
      </section>
    </>
  )
}

export default App