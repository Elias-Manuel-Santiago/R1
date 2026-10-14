import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import './FormularioSaludo.css'

function obtenerSaludo(hora: number) {
  if (hora >= 19 || hora < 5) return 'Buenas noches'
  if (hora < 13) return 'Buen día'
  return 'Buenas tardes'
}



function FormularioSaludo() {
  const [nombre, setNombre] = useState('')
  const [saludo, setSaludo] = useState('')
  const [error, setError] = useState('')

  function validarNombre(nombre: string) {
    const regexNombre: RegExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s']{2,50}$/;

    if (regexNombre.test(nombre.trim())) {
      return true;
    }
    setError('Ingrese un nombre válido');
    return false;
  }

  function enviarFormulario(
    evento: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) {
    evento.preventDefault()
    const nombreLimpio = nombre.trim()
    if (validarNombre(nombre)) {
      if (nombreLimpio) {
        setSaludo(`${obtenerSaludo(new Date().getHours())}, ${nombreLimpio}.`)
      }
    }

  }

  return (
    <>
      <form className="formulario-saludo" onSubmit={enviarFormulario}>
        <label htmlFor="nombre">Nombre</label>
        <div className="fila-formulario">
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            placeholder="Tu nombre"
            autoComplete="name"
          />
          <button type="submit">Saludar</button>
        </div>
        <div className='error'>{error}</div>
      </form>

      {saludo && (
        <p className="saludo" aria-live="polite">
          {saludo}
        </p>
      )}
    </>
  )
}

export default FormularioSaludo
