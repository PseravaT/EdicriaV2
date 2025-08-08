import './home.css';
import { useFetch } from '../../hook/useFetch';


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
    const { data, isPending, error } = useFetch('http://localhost:3000/conteudoCaixas');
return (
<section className="conteudo_central">
    <div className="maxWidth row">
    {isPending && <p> ... Carregando </p>}
    {error && <p>{error}</p>}
    {data?.map((caixa, index) => (
    <InformacaoCaixa key={index} {...caixa} />
    ))}
    </div>
</section>
);
}
