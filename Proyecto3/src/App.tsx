import './App.css'
import Counter from './components/counter/Counter.tsx'
import ThemeButton from './components/themeButton/themeButton.tsx'

function App() {
  return (
    <>
      <main id="center">
        <Counter />
      </main>
      <footer>
        <ThemeButton />
      </footer>
    </>
  )
}

export default App
