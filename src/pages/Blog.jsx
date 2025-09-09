// src/pages/Blog.jsx
import { useState } from "react";

export default function Blog(){
  // contoh data: title + excerpt (ringkas) + content (penjelasan lengkap)
  const posts = [
    {
      id: "pindahan-hemat",
      title: "Tips Pindahan Hemat & Rapi",
      excerpt: "Packing rapi, atur waktu, dan pilih armada yang pas.",
      content: `
1) **Siapkan kardus & bubble wrap** untuk barang rapuh.
2) **Label kotak per-ruangan** agar bongkaran cepat.
3) **Jadwalkan H-2**: konfirmasi jam pickup & akses lift.
4) **Pisahkan tas penting** (dokumen, charger, obat).
      `.trim()
    },
    {
      id: "pilih-armada",
      title: "Memilih Armada yang Tepat",
      excerpt: "Pickup vs Blindvan vs Truk—mana yang cocok?",
      content: `
- **Pickup**: barang ringan, rute kota, biaya hemat.
- **Blindvan**: tertutup & aman untuk elektronik/dokumen.
- **Truk CDD**: volume besar, antar kota, sekali angkut.
Tips: ukur **volume** (m³) & **berat perkiraan** sebelum memilih.
      `.trim()
    },
    {
      id: "cek-biaya",
      title: "Cara Cek Perkiraan Biaya",
      excerpt: "Gunakan berat/volume atau paket flat per rute.",
      content: `
- Estimasi cepat: **max(berat kg, volume m³ × 250)**.
- Tanyakan apakah ada **minimum charge** atau **biaya naik tangga**.
- Kirim **foto barang** via WhatsApp untuk estimasi akurat.
      `.trim()
    }
  ];

  // state untuk controlling mana yang sedang terbuka
  const [openIds, setOpenIds] = useState(() => new Set());

  function toggle(id){
    setOpenIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <section>
      <h1>Blog</h1>
      <div className="stack">
        {posts.map((p) => {
          const isOpen = openIds.has(p.id);
          return (
            <article className="card blog-card" key={p.id}>
              <button
                className="blog-toggle"
                aria-expanded={isOpen}
                aria-controls={`content-${p.id}`}
                onClick={() => toggle(p.id)}
                title={isOpen ? "Sembunyikan" : "Baca selengkapnya"}
              >
                <div className="blog-head">
                  <h3>{p.title}</h3>
                  <span className={`chev ${isOpen ? "up" : "down"}`} aria-hidden>▾</span>
                </div>
                <p className="muted">{p.excerpt}</p>
              </button>

              <div
                id={`content-${p.id}`}
                className={`blog-content ${isOpen ? "open" : ""}`}
              >
                {/* render markdown sangat sederhana: <br/> untuk baris baru & bold ** ** */}
                <RichishText text={p.content} />
              </div>

              <div className="blog-actions">
                <button className="btn" onClick={() => toggle(p.id)}>
                  {isOpen ? "Tutup" : "Baca Selengkapnya"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/**
 * Komponen ringan untuk render teks dengan:
 * - newline -> <br/>
 * - **tebal** -> <strong>
 * (cukup untuk konten pendek tanpa library markdown)
 */
function RichishText({ text }){
  const withStrong = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const withBreaks = withStrong.replace(/\n/g, "<br/>");
  return <p dangerouslySetInnerHTML={{ __html: withBreaks }} />;
}
