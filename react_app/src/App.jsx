import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
// import Router  from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   
     <div>
          

      <Header/>
     </div>
      
   
  )
}

export default App
