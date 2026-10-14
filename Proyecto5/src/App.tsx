import './App.css'
import FormularioSaludo from './components/FormularioSaludo/FormularioSaludo.tsx'
import ThemeButton from './components/themeButton/themeButton.tsx'

function App() {
  return (
    <main className="app">
      <ThemeButton />
      <section className="welcome-card">
        <span className="eyebrow">Bienvenido</span>
        <h1>¿Cómo te llamás?</h1>
        <p className="description">
          Escribí tu nombre
        </p>
        <FormularioSaludo />
      </section>
    </main>
  )
}

export default App
