import S from './querodoar.module.scss'
import Icon from '../assets/imagem/Frame.png'
import {useState} from 'react'
import axios from 'axios'

export default function Doar() {

   const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviarDados = async()=>{
        
        const urlApi = "https://api-livro-2.onrender.com/doar" 
        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post(urlApi, dadosEnviar) 

        alert("Livro cadastrado!!") 
        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")
    }

  
    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
        console.log(e.target.value) 
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) =>{
        setImagem_url(e.target.value)
    }


    return(
        <section className={S.secaoFormDoarLivro}>
      <p className={S.aviso}>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>

      <form onSubmit={(e)=> e.preventDefault()} className={S.secaoFormulario}>

        <div className={S.containerIconAndText}>
          <img className={S.iconImagemLivro} src={Icon} alt="Ícone Livro" />
          <h2 className={S.infoLivro}>Informações do Livro</h2>
        </div>

        <input
          className={S.input}
          type="text"
          name="titulo-livro"
          placeholder="Titulo"
          onChange={capturaTitulo} value={titulo}
        />
        <input
          className={S.input}
          type="text"
          name="categoria-livro"
          placeholder="Categoria"
          onChange={capturaCategoria} value={categoria}
        />
        <input
          className={S.input}
          type="text"
          name="autor-livro"
          placeholder="Autor"
          onChange={capturaAutor} value={autor}
        />
        <input
          className={S.input}
          type="text"
          name="imagem-livro"
          placeholder="Link da imagem"
          onChange={capturaImagem} value={imagem_url}
        />
        <input
          className={S.input}
          type="text"
          name="imagem-livro"
          placeholder="Quantidade de páginas"
        />

        <button className={S.buttonSubmitDoar} onClick={enviarDados}>Doar</button>
      </form>
    </section>
    )
}