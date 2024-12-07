import insta from '../assets/imagem/insta.png'
import face from '../assets/imagem/face.png'
import linke from '../assets/imagem/linke.png'
import X from '../assets/imagem/x.png'
import youtube from '../assets/imagem/youtu.png'
import S from './footer.module.scss'

export default function Footer() {
    return(
        <footer className={S.rodape}>
        <section className={S.secaoContato}>
          <p className={S.numeroContato}>4002-8922</p>
          <section className={S.containerIcons}>
            <img src={face} alt="Ícone de Contato" />
  
            <img src={X} alt="Ícone de Contato" />
  
            <img className={S.icon} src={youtube} alt="Ícone de contato" />
  
            <img className={S.icon} src={linke} alt="Ícone de contato" />
  
            <img className={S.icon} src={insta} alt="Ícone de contato" />
          </section>
        </section>
        
        <section className={S.secaoInfovnw}>
          <p className={S.textoInformativo}>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
        </section>
      </footer>
    );
  }