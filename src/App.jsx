import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Fullstackpage from './Pages/Fullstackpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Fullstackpage />
    </>
  )
}

export default App
