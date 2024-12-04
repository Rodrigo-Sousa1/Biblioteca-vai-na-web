import {  Routes, Route } from 'react-router-dom'
import Inicio from '../../pages/Inicio.jsx'
import Doados from '../../pages/doados.jsx'
import Doar from '../../pages/querodoar.jsx'

export default function Rotas () {
    return(
        <>
            <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="doados" element={<Doados />} />
        <Route path="doar" element={<Doar />} />
            </Routes>

    </>
    )
}