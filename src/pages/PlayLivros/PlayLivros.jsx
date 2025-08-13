import './PlayLivros.css'
import { useFetch } from '../../hook/useFetch'
import { useState, useEffect } from 'react';

function InformacaoPL({ id, title, image, genres, description, spotifyEmbed, onDelete }) {
  const [expandido, setExpandido] = useState(false);
  const textoCurto = description.slice(0, 300) + '...';

  return (
    <article className='articles_style'>
      <img src={image} alt={title} className='img_articles' />
      <div className="descricao_livro">
        <h2>{title}</h2>
        <p className="genero">{genres?.join(', ')}</p>
        <p>{expandido ? description : textoCurto}</p>

        {description.length > 100 && (
          <button onClick={() => setExpandido(!expandido)} className="botao_ver_mais">
            {expandido ? 'Ler menos' : 'Ler mais'}
          </button>
        )}

        {id !== "1" && id!== "2" &&(
          <button
          onClick={() => onDelete(id)}
          className="botao_excluir">
            Excluir
          </button>
        )}
        
      </div>

      <iframe
        src={spotifyEmbed}
        frameBorder="0"
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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (data) setArticles(data);
  }, [data]);

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este item?")) {
      await fetch(`http://localhost:3000/articles/${id}`, {
        method: "DELETE"
      });
      setArticles((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="maxWidth_articles">
      {isPending && <p>... Carregando</p>}
      {error && <p>{error}</p>}
      {articles?.map((pl) => (
        <InformacaoPL key={pl.id} {...pl} onDelete={handleDelete} />
      ))}
    </div>
  );
}
