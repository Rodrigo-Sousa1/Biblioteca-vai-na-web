import { Link } from "react-router-dom";
import s from './header.module.scss'
import logolivro from '../assets/imagem/logolivro.png'
import lupa from '../assets/imagem/lupa.png'


export default function Header() {
    return (
        <header className={s.header}>

            <section className={s.logoHeader}>
                <img src={logolivro} alt="" />
                <h1>Livros Vai Na Web</h1>
            </section>

         
                <nav className={s.navHeader}>
                    <ul>

                        <li><Link className={s.link} to="/">INICIO </Link></li>
                        <li><Link className={s.link} to="doados"> LIVROS DOADOS </Link></li>
                        <li><Link className={s.link} to="doar"> QUERO DOAR </Link></li>

                    </ul>
                </nav>

                <section className={s.barraDeBusca}>
                    <input
                        type="search"
                        name=""
                        id=""
                        placeholder=""
                    />
                    <button>
                        <img src={lupa} alt="Icone de lupa branca" />
                    </button>
                </section>

        </header>
    )
}