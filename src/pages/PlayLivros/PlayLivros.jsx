import './PlayLivros.css'
import { useFetch } from '../../hook/useFetch'
import { useState } from 'react';

function InformacaoPL ({id, title, image,genere,description, spotifyEmbed}){
  const [expandido, setExpandido] = useState(false);

  const textoCompleto = Array.isArray(description) ? description.join(''): description;
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
      // eslint-disable-next
      <iframe
        src={spotifyEmbed}
        frameborder="0"
        className="iframe_spotify"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
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
