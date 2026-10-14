import { useCallback, useEffect, useState } from 'react'

type Tema = 'dark' | 'light'

function obtenerTemaInicial(): Tema {
  const guardado = localStorage.getItem('tema') as Tema | null
  if (guardado === 'dark' || guardado === 'light') return guardado

  const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefiereOscuro ? 'dark' : 'light'
}

export function useTema() {
  const [tema, setTema] = useState<Tema>(obtenerTemaInicial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'dark')
    localStorage.setItem('tema', tema)
  }, [tema])

  const toggleTema = useCallback(() => {
    setTema((actual) => (actual === 'dark' ? 'light' : 'dark'))
  }, [])

  return { tema, toggleTema }
}
