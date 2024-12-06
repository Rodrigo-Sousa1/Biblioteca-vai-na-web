import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../../pages/Inicio.jsx'
import Doados from '../../pages/doados.jsx'
import Doar from '../../pages/querodoar.jsx'
import Header from '../header.jsx'

export default function Rotas () {
    return(
        <BrowserRouter>
        <Header/>
        
            <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="doados" element={<Doados />} />
        <Route path="doar" element={<Doar />} />
            </Routes>

    </BrowserRouter>
    )
}