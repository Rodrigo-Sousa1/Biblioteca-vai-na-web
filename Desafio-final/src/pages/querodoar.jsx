import S from './querodoar.module.scss'
import Icon from '../assets/imagem/Frame.png'

export default function Doar() {
    return(
        <section className={S.secaoFormDoarLivro}>
      <p className={S.aviso}>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>

      <form className={S.secaoFormulario}>
        <div className={S.containerIconAndText}>
          <img className={S.iconImagemLivro} src={Icon} alt="Ícone Livro" />
          <h2 className={S.infoLivro}>Informações do Livro</h2>
        </div>

        <input
          className={S.input}
          type="text"
          name="titulo-livro"
          placeholder="Titulo"
        />
        <input
          className={S.input}
          type="text"
          name="categoria-livro"
          placeholder="Categoria"
        />
        <input
          className={S.input}
          type="text"
          name="autor-livro"
          placeholder="Autor"
        />
        <input
          className={S.input}
          type="text"
          name="imagem-livro"
          placeholder="Link da imagem"
        />
        <input
          className={S.input}
          type="text"
          name="imagem-livro"
          placeholder="Quantidade de páginas"
        />

        <button className={S.buttonSubmitDoar}>Doar</button>
      </form>
    </section>
    )
}