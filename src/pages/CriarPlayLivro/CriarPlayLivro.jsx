import { useEffect, useState } from 'react';
import './CriarPlayLivro.css';
import { useFetch } from '../../hook/useFetch';
import { useNavigate } from 'react-router-dom';
import notFound from '../../assets/images/notFound.jpg';

export default function CriarPlayLivro() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(notFound);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [description, setDescription] = useState('');
    const [spotifyEmbed, setSpotifyEmbed] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const { postData, data, isPending, error } = useFetch('http://localhost:3000/articles', 'POST');
    const navigate = useNavigate();

    //definição dos generos disponíveis
    const commonGenres = [
        'Romance',
        'Ficção Científica',
        'Fantasia',
        'Suspense',
        'Terror',
        'Drama',
        'Biografia',
        'Aventura'
    ];

    useEffect(() => {
        if (submitted && data && !isPending && !error) {
            navigate('/PlayLivros');
        }
    }, [submitted, data, isPending, error, navigate]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleAddGenre = () => {
        if (!selectedGenre) return;
        if (!genres.includes(selectedGenre)) {
            setGenres([...genres, selectedGenre]);
        }
        setSelectedGenre('');
    };




    const convertSpotifyLink = (link) => {
    // Se o link for inválido ou já for de embed, retorna como está.
    if (!link.includes('open.spotify.com') || link.includes('/embed/')) {
        return link;
    }

    // Remove parâmetros extras, como "?si=..."
    const cleanLink = link.split('?')[0];

    // Tenta substituir para cada tipo de link.
    // O replace só funcionará para o tipo correspondente.
    const embedLink = cleanLink
        .replace('/track/', '/embed/track/')
        .replace('/playlist/', '/embed/playlist/')
        .replace('/album/', '/embed/album/');

    return embedLink;
};

    const handleSubmit = (e) => {
        e.preventDefault();

        if (genres.length === 0) {
            alert('Adicione pelo menos um gênero!');
            return;
        }

        const embedLink = convertSpotifyLink(spotifyEmbed);

        setSubmitted(true);
        postData({
            title,
            image,
            genres,
            description,
            spotifyEmbed: embedLink
        });
    };

    return (
        <section className="bloco">
            <div className="create">
                <h2 className="page-title">Crie seu PlayLivro</h2>

                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Título do PL:</span>
                        <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                    </label>

                    <label>
                        <span>Imagem:</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {image && (
                            <img src={image} className='imgPreview' alt="Preview"/>
                        ) }
                    </label>

                    <label>
                        <span>Gêneros:</span>
                        <div className="genero">
                            <select
                                value={selectedGenre}
                                onChange={(e) => setSelectedGenre(e.target.value)}
                            >
                                <option value="">Selecione um gênero</option>
                                {commonGenres.map((g, i) => (
                                    <option key={i} value={g} required>
                                        {g}
                                    </option>
                                ))}
                            </select>
                            <button
                                className="btn"
                                type="button"
                                onClick={handleAddGenre}
                            >
                                Add
                            </button>
                        </div>
                    </label>

                    <p>
                        Gêneros atuais:{' '}
                        {genres.map((g, i) => (
                            <em key={i}>{g}{i < genres.length - 1 ? ', ' : ''}</em>
                        ))}
                    </p>

                    <label>
                        <span>Descrição:</span>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                    </label>

                    <label>
                        <span>Link do Spotify:</span>
                        <input
                            type="text"
                            placeholder="Cole o link do Spotify (playlist, álbum ou música)"
                            value={spotifyEmbed}
                            onChange={(e) => setSpotifyEmbed(e.target.value)}
                        />
                    </label>

                    <button className="btn" disabled={isPending}>
                        {isPending ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </div>
        </section>
    );
}
