import { useEffect, useRef, useState } from 'react'
import './helloWorld.css'

const FONTS = [
  'Arial, sans-serif',
  'Georgia, serif',
  '"Courier New", monospace',
  '"Times New Roman", serif',
  'Verdana, sans-serif',
  '"Comic Sans MS", cursive',
  'Impact, sans-serif',
  '"Trebuchet MS", sans-serif',
  '"Palatino Linotype", serif',
  '"Lucida Console", monospace',
]

const INTERVAL_MS = 333

function AnimatedLetter({ character }: { character: string }) {
  const [font, setFont] = useState(FONTS[0])
  const interval = useRef<ReturnType<typeof setInterval> | null>(null)

  const changeFont = () => {
    setFont((currentFont) => {
      let nextFont = currentFont

      // Evita elegir dos veces seguidas la misma fuente.
      while (nextFont === currentFont) {
        nextFont = FONTS[Math.floor(Math.random() * FONTS.length)]
      }

      return nextFont
    })
  }

  const startChangingFont = () => {
    if (interval.current) return

    // El primer cambio es inmediato; los siguientes ocurren 3 veces por segundo.
    changeFont()
    interval.current = setInterval(changeFont, INTERVAL_MS)
  }

  const stopChangingFont = () => {
    if (!interval.current) return

    clearInterval(interval.current)
    interval.current = null
  }

  // Limpia el intervalo si el componente desaparece mientras está activo.
  useEffect(() => stopChangingFont, [])

  return (
    <span
      className="letter"
      style={{ fontFamily: font }}
      onMouseEnter={startChangingFont}
      onMouseLeave={stopChangingFont}
    >
      {/* Un espacio normal no ocuparía ancho dentro de este span. */}
      {character === ' ' ? '\u00A0' : character}
    </span>
  )
}

function HelloWorld() {
  const text = 'HOLA, MUNDO!'

  return (
    <main id="holamundo">
      <h1 aria-label={text}>
        {/* Cada carácter guarda su propia fuente y controla su propio intervalo. */}
        {[...text].map((character, index) => (
          <AnimatedLetter key={index} character={character} />
        ))}
      </h1>
    </main>
  )
}

export default HelloWorld
