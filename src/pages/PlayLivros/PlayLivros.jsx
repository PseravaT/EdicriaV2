import './PlayLivros.css'
import { useFetch } from '../../hook/useFetch'
import { useState } from 'react';

function InformacaoPL ({id, title, image,genere,description, spotifyEmbed}){
  const [expandido, setExpandido] = useState(false);

  //se for um Array ele executa o "join" (junta todos os itens do Array em uma única String) se não for um array usa description 
  const textoCompleto = Array.isArray(description) ? description.join(''): description;
  // cria a versao curta aonde pega o texto completo do 0 ao 300 caractere acrescentando o ...
  const textoCurto = textoCompleto.split('').slice(0,300).join('') + '...'


  return (
    <article className='articles_style'>
      <img src={image} alt={title} className='img_articles' />
      <div className="descricao_livro">
        <h2>{title}</h2>
        <p className="genero">{genere.join(', ')}</p>
        <p>{expandido ? textoCompleto : textoCurto}</p>
        <button onClick={() => setExpandido(!expandido)} className="botao_ver_mais">
          {expandido ? 'Ler menos' : 'Ler mais'}
        </button>
      </div>

      <iframe
        src={spotifyEmbed}
        frameborder="0"
        className="iframe_spotify"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={`Spotify embed do álbum ${title}`}
      ></iframe>


    </article>
  );
}

export default function PlayLivros() {
  const { data, isPending, error } = useFetch('http://localhost:3000/articles');
  return (
    <div className="maxWidth_articles">
      {isPending && <p> ... Carregando </p>}
      {error && <p>{error}</p>}
      {data?.map((pl, index) => (
        <InformacaoPL key={index} {...pl}/>
      ))}
    </div>
  )
}
