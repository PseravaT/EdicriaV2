import './PlayLivros.css'
import { useFetch } from '../../hook/useFetch'
import { useState } from 'react';

function InformacaoPL ({id, title, image,genres,description, spotifyEmbed}){
  const [expandido, setExpandido] = useState(false);

  const textoCurto = description.slice(0, 300) + '...';


  return (
    <article className='articles_style'>
      <img src={image} alt={title} className='img_articles' />
      <div className="descricao_livro">
        <h2>{title}</h2>
        <p className="genero">{genres.join(', ')}</p>
        <p>{expandido ? description : textoCurto}</p>
        {description.length > 100 ? (<button onClick={() => setExpandido(!expandido)} className="botao_ver_mais">
          {expandido ? 'Ler menos' : 'Ler mais'}
        </button>) : null}
        
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
