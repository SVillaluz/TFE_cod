import { useState } from 'react'
import './App.css'

function NewUser({ onBack }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <div className="center">
            <h1>Nuevo usuario</h1>

            <label htmlFor="email">Ingrese su correo</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Escribe tu correo..."
            />

            <label htmlFor="password">Ingrese su contraseña</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Escribe tu contraseña..."
            />

            <label htmlFor="confirmPassword">Confirme su contraseña</label>
            <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme tu contraseña..."
            />

            <div className="actions">
                <button type="button" className="btn" onClick={() => alert('Usuario registrado')}>
                    Registrarse
                </button>
            </div>

            <p className="link-text" onClick={onBack}>
                Volver al inicio
            </p>
        </div>
    )
}

export default NewUser