import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header.jsx'
import Rotas from './components/routes/routes.jsx'
import Footer from './components/footer.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import './GlobalStyle/globalStyle.scss'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   

    
    <Rotas/>
    <Footer/>
 
    
    </>
  )
}

export default App
