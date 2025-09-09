import { Link } from "react-router-dom";


const services = [
{ title: "Sewa Pickup", desc: "Harian / per trip, cocok untuk barang ringan." },
{ title: "Sewa Blindvan", desc: "Tertutup & aman, cocok untuk barang sensitif." },
{ title: "Sewa Truk CDD", desc: "Volume besar, rute antar kota." },
{ title: "Pindahan Rumah/Kantor", desc: "Full bantuan angkut & susun." },
{ title: "Antar Kota Instan", desc: "Kirim cepat ke kota tujuan." },
];


export default function Layanan(){
return (
<section>
<h1>Layanan Kami</h1>
<div className="grid-cards">
{services.map((s,i)=> (
<div className="card" key={i}>
<h3>{s.title}</h3>
<p>{s.desc}</p>
<Link to="/kontak" className="btn">Pesan via WhatsApp</Link>
</div>
))}
</div>
</section>
);
}