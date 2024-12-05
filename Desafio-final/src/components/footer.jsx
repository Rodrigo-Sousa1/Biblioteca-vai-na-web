import insta from '../assets/imagem/insta.png'
import face from '../assets/imagem/face.png'
import linke from '../assets/imagem/linke.png'
import X from '../assets/imagem/x.png'
import youtube from '../assets/imagem/youtu.png'
import s from './footer.module.scss'

export default function Footer() {
    return(
        <footer className={s.footer}>
            <section>
                <h3>4002-8922</h3>

                <nav>
                    <a href="#">
                        <img src={face} alt="facebook" />
                    </a>
                    <a href="#">
                        <img src={X} alt="Twitter" />
                    </a>
                    <a href="#">
                        <img src={youtube} alt="youtube" />
                    </a>
                    <a href="#">
                        <img src={linke}alt="linkedin" />
                    </a>
                    <a href="#">
                        <img src={insta} alt="instagram" />
                    </a>
                </nav>
            </section>

        </footer>
    )
}