import imgArmada from "../assets/Jasa-Pengiriman.jpg";

export default function Galeri(){
const items = [
{src: imgArmada, cap:"Armada siap jalan"},
{src:imgArmada, cap:"Pindahan kantor"},
{src: imgArmada, cap:"Distribusi barang"},
];
return (
<section>
<h1>Galeri</h1>
<div className="grid-gallery">
{items.map((it, i)=> (
<figure key={i} className="card">
<img src={`${it.src}?auto=format&fit=crop&w=800&q=60`} alt={it.cap} />
<figcaption>{it.cap}</figcaption>
</figure>
))}
</div>
</section>
);
}