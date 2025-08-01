import './NavBar.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'


export default function NavBar() {
return (
<header>
    <img src={logo} alt="Logo Edicria" className='logo_header' />
    <h1 className="titulo">Edicria</h1>
    <nav className='nav_header'>
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/QuemSomos">Quem Somos</Link></li>
            <li><Link to="/PlayLivros">PlayLivros</Link></li>
            <li><Link to="/CriarPlayLivro">CriarPL</Link></li>
        </ul>
    </nav>
</header>

)
}
