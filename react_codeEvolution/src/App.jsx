import { useState } from 'react'
import Message from './components/message'
import Counter from './components/Counter'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import './App.css'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBing from './components/EventBing'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NalmeList from './components/NalmeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Message />
      <Counter />
      <Greet name="John Cena" heroname="UNOCME" /> */}
      {/* <Welcome name="John Cena" heroname="UNOCME" /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBing /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      < NalmeList />
    </div>
  )
}

export default App
