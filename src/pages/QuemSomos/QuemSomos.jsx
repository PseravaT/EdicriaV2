import './QuemSomos.css'
import geralogo from '../../assets/images/geraLogo.png'

export default function QuemSomos() {
return (
    <main class="maxWidth">
        <section class="conteudo_central">
            <div class="ficha_container">
                <img src={geralogo} alt="Logo GERA" className="logo_GeraFicha"/>
                <div class="ficha_texto">
                <h2>Pedro e Paulo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio laboriosam deserunt repellendus consectetur ratione provident, labore excepturi ipsa doloribus officiis ducimus eligendi reprehenderit? Repudiandae quisquam quia animi at ducimus error eveniet ut illum, recusandae aliquid nobis, et sapiente minima. Iure illo eveniet molestiae dolorum deserunt? Voluptate officiis sunt aut veniam ducimus eum laudantium sed. Consectetur possimus fuga earum, labore quae quaerat voluptatibus ipsa hic.</p>
                </div>
            </div>
        </section>

    </main>
)
}
