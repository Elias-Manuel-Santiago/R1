import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className="counter" aria-label="Contador">
      <h1 className="counter__value">Valor = {count}</h1>
      <div className="counter__controls">
        <button
          className="counter__button"
          type="button"
          aria-label="Restar uno"
          onClick={() => setCount((currentCount) => currentCount - 1)}
        >
          &minus;
        </button>
        <button
          className="counter__button"
          type="button"
          aria-label="Sumar uno"
          onClick={() => setCount((currentCount) => currentCount + 1)}
        >
          +
        </button>
      </div>
    </section>
  )
}

export default Counter
