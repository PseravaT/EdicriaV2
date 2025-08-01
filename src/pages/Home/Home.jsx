import './home.css'

import lamp from '../../assets/images/lamp.png'
import playlist from '../../assets/images/playlist.png'
import livro from '../../assets/images/livro.png'
import logo from '../../assets/images/logo.png'

export default function Home() {
return (
    <section className="conteudo_central">
        <div class="maxWidth row">

                <article className="blocos_info">
                    <img src={lamp} alt="Propósito" class="icones_bloco" />
                    <h3 className="middleContent_title">Propósito</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa voluptate doloribus
                        consequuntur ducimus. Nulla labore corrupti iste eaque doloremque! - Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.</p>
                </article>

                <article className="blocos_info">
                    <img src={playlist} alt="Playlists" className="icones_bloco" />
                    <h3 className="middleContent_title">Playlists</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa voluptate doloribus
                        consequuntur ducimus. Nulla labore corrupti iste eaque doloremque!</p>
                </article>

                <article class="blocos_info">
                    <img src={livro} alt="Livros" className="icones_bloco" />
                    <h3 className="middleContent_title">Livros</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa voluptate doloribus
                        consequuntur ducimus. Nulla labore corrupti iste eaque doloremque!</p>
                </article>

                <article className="blocos_info">
                    <img src={logo} alt="União" className="icones_bloco" />
                    <h3 className="middleContent_title">União</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa voluptate doloribus
                        consequuntur ducimus. Nulla labore corrupti iste eaque doloremque!</p>
                </article>
            </div>
        </section>
)
}
