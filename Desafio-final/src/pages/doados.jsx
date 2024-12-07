import LIvro from '../assets/imagem/livrodoado.jpg'
import s from './doados.module.scss'
export default function Doados() {
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
            </section>

        </main>
    )
}