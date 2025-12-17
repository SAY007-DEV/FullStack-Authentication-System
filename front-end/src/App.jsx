import { useState } from 'react'

import './App.css'

import AuthContainer from './Pages/Register/AuthContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <AuthContainer/>
  
    </>
  )
}

export default App
