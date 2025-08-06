import './home.css';

import lamp from '../../assets/images/lamp.png';
import playlist from '../../assets/images/playlist.png';
import livro from '../../assets/images/livro.png';
import logo from '../../assets/images/logo.png';


//array dos conteúdos dentro da caixa para chamar mais a baixo ou para facilitar a ediçao
const conteudodasCaixas = [
{
    image: lamp,
    alt: 'Ícone de lâmpada representando propósito',
    title: 'Propósito',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa voluptate doloribus consequuntur ducimus. Nulla labore corrupti iste eaque doloremque!',
},
{
    image: playlist,
    alt: 'Ícone de playlist representando músicas',
    title: 'Playlists',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa voluptate doloribus consequuntur ducimus. Nulla labore corrupti iste eaque doloremque!',
},
{
    image: livro,
    alt: 'Ícone de livro representando conhecimento',
    title: 'Livros',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa voluptate doloribus consequuntur ducimus. Nulla labore corrupti iste eaque doloremque!',
    },
    {
    image: logo,
    alt: 'Ícone de união representando comunidade',
    title: 'União',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa voluptate doloribus consequuntur ducimus. Nulla labore corrupti iste eaque doloremque!',
    },
];


// Componente separado para renderizar cada bloco. Recebe as props definidas no array contentBlocks
function InformacaoCaixa({ image, alt, title, text }) {
return (
<article className="blocos_info">
    <img src={image} alt={alt} className="icones_bloco" />
    <h3 className="middleContent_title">{title}</h3>
    <p>{text}</p>
</article>
);
}

//map para cada array caixa ele vai usar a função <InformacoeCaixa /> / uso do Spread (...) para pegar todas as informações das caixas
export default function Home() {
return (
<section className="conteudo_central">
    <div className="maxWidth row">
    {conteudodasCaixas.map((caixa, index) => (
        <InformacaoCaixa key={index} {...caixa} />
    ))}
    </div>
</section>
);
}
