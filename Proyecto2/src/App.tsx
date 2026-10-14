import fotoPerfil from './assets/image.jpg'
import Tarjeta from './components/tarjeta'
import ThemeButton from './components/themeButton/themeButton'
import './App.css'

function App() {
  return (
    <main className="app">
      <Tarjeta
        nombre="Fulano"
        apellido="Mengano"
        profesion="Agarrador de pala"
        imagen={fotoPerfil}
      />
      <ThemeButton />
    </main>
  )
}

export default App
