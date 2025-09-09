import { ADDRESS, MAPS_EMBED_URL } from "../config";

export default function Tentang(){
  return (
    <section>
      <h1>Tentang Kami</h1>
      <p>
        Kami melayani jasa angkut & ekspedisi 24 jam dengan armada lengkap dan tim
        berpengalaman. Fokus kami adalah kecepatan, keamanan, dan kenyamanan pelanggan.
      </p>

      <div className="card map-card">
        <h3>Kantor & Area Layanan</h3>
        <p>
          Alamat: <b>{ADDRESS}</b><br/>
          Jam Operasional: 24 Jam (setiap hari)
        </p>

        <div className="map-wrap">
          <iframe
            title="Lokasi Kantor"
            src={MAPS_EMBED_URL}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="muted small">
          *Zoom dan geser peta untuk melihat area layanan.
        </p>
      </div>
    </section>
  );
}
