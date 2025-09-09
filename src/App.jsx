import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layanan from "./pages/Layanan.jsx";
import Kontak from "./pages/Kontak.jsx";
import Tentang from "./pages/Tentang.jsx";
import Galeri from "./pages/Galeri.jsx";
import Blog from "./pages/Blog.jsx";
import { BRAND_NAME } from "./config";


export default function App(){
return (
<div className="shell">
<header className="container header">
<div className="logo">{BRAND_NAME}</div>
<nav>
<NavLink to="/" end>Home</NavLink>
<NavLink to="/layanan">Layanan</NavLink>
<NavLink to="/kontak">Booking</NavLink>
<NavLink to="/tentang">Tentang</NavLink>
<NavLink to="/galeri">Galeri</NavLink>
<NavLink to="/blog">Blog</NavLink>
</nav>
</header>


<main className="container">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/layanan" element={<Layanan/>} />
<Route path="/kontak" element={<Kontak/>} />
<Route path="/tentang" element={<Tentang/>} />
<Route path="/galeri" element={<Galeri/>} />
<Route path="/blog" element={<Blog/>} />
</Routes>
</main>


<footer className="footer">
<div className="container">
<div>© {new Date().getFullYear()} {BRAND_NAME} · Jasa Angkut & Ekspedisi 24 Jam</div>
<div className="links">
<a href="/kontak">Booking</a>
<a href="/layanan">Layanan</a>
<a href="https://wa.me/" target="_blank">WhatsApp</a>
</div>
</div>
</footer>
</div>
);
}