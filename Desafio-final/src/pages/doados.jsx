import LIvro from '../assets/imagem/livrodoado.jpg'
import s from './doados.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Doados() {
 const [livros, setLivros] = useState([])
 
     const getLivros = async () => {
         try {
             const response = await axios.get("https://api-livro-2.onrender.com/livros")
             setLivros(response.data)
         } catch (error) {
             console.error("Erro ao buscar livros:", error)
         }
     }

     useEffect(() => {
         getLivros()
     }, [])


    return (


        <main className={s.mainDoados}>
            <h2>Livros Doados </h2>

            <section className={s.container}>

                <div>
                <img src={LIvro} alt="" />
                <p>O protagonista</p>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
                </div>

           <section className= {s.boxBooks}>
                 {livros.map((item) => (
                     <article key={item.id}>
                         <img src={item.imagem_url} alt={item.titulo} />
                         <h3>{item.titulo}</h3>
                         <p>{item.autor}</p>
                         <p>{item.categoria}</p>
                     </article>
                 ))}

           </section>

            </section>

        </main>
    )
}