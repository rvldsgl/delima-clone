import WhatsAppBookingForm from "../components/WhatsAppBookingForm.jsx";


export default function Kontak(){
return (
<section>
<h1>Booking / Kontak</h1>
<p className="muted">Isi form di bawah untuk langsung chat WhatsApp admin.</p>
<WhatsAppBookingForm />


<div className="card">
<h3>Kontak & Alamat</h3>
<p>WhatsApp: <b>+62 xxx-xxxx-xxxx</b><br/>Email: hello@yourbrand.com<br/>Alamat: Jl. Contoh No. 123, Kota</p>
</div>
</section>
);
}