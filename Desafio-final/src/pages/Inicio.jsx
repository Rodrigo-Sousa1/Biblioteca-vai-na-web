import s from './inicio.module.scss'
import img1 from '../assets/imagem/img2.png'
import img2 from '../assets/imagem/img3.png'
import img3 from '../assets/imagem/img4.png'
import img4 from '../assets/imagem/img5.png'

export default function Inicio() {
    return (
        <main>

            <section className={s.container1}>
                <div>
                    <p>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>

                </div>
            </section>

            <section className={s.container2}>
            <h2>Por que devo doar?</h2>

            <section>
                <div>
                <img src={img1} alt="" />
                <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </div>

                <div>
                <img src={img2} alt="" />
                <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </div>

                <div>
                <img src={img3} alt="" />
                <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </div>

                <div>
                <img src= {img4} alt="" />
                <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </div>
                </section>

            </section>





        </main>
    )
}