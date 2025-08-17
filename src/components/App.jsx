import { useState } from 'react'
import '../index.css'
import Header from './Header'
import Card from './PokemonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header />
      <Card />
    </div>
    </>
  )
}

export default App
