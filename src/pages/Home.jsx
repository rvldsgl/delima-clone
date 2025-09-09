import { Link } from "react-router-dom";


export default function Home(){
return (
<section className="hero">
<h1>Jasa Angkut & Ekspedisi 24 Jam</h1>
<p>Pickup, Blindvan, Truk Box, Pindahan — cepat, hemat, aman. Booking via WhatsApp.</p>
<div className="cta">
<Link to="/kontak" className="btn primary">Booking Sekarang</Link>
<Link to="/layanan" className="btn">Lihat Layanan</Link>
</div>
<ul className="bullets">
<li>Armada lengkap</li>
<li>Tim responsif</li>
<li>Jangkauan antar kota</li>
</ul>
</section>
);
}