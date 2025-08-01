import { Routes, Route } from 'react-router-dom';

// ROTAS
import Home from './pages/Home/Home';
import CriarPlayLivro from './pages/CriarPlayLivro/CriarPlayLivro';
import PlayLivros from './pages/PlayLivros/PlayLivros';
import QuemSomos from './pages/QuemSomos/QuemSomos';


export default function Rotas() {
return (

    <Routes>
        <Route exact path="/*" element={<Home />} />
        <Route path="/CriarPlayLivro" element={<CriarPlayLivro />} />
        <Route path="/PlayLivros" element={<PlayLivros />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
    </Routes>
);
}