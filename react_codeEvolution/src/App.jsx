import { useState } from 'react'
import Message from './components/message'
import Counter from './components/Counter'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Message />
      <Counter />
      <Greet name="John Cena" heroname="UNOCME" />
      <Welcome name="John Cena" heroname="UNOCME" />
    </div>
  )
}

export default App
