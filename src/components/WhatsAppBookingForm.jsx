import React, { useMemo, useState } from "react";
import { BUSINESS_WA, SITE_DOMAIN } from "../config";


export default function WhatsAppBookingForm(){
  const [form, setForm] = useState({
  name: "",
  customerWa: "",
  pickupAddr: "",
  destAddr: "",
  bookingDate: "",
  bookingTime: "",
  service: "Sewa Blindvan",
  });
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);


  function setField(k, v){ setForm(f => ({...f, [k]: v})); }


  function normalizeIndoPhone(input){
  const digits = (input||"").replace(/\D+/g, "");
  if(!digits) return "";
  if(digits.startsWith("0")) return "62"+digits.slice(1);
  if(digits.startsWith("62")) return digits;
  if(digits.startsWith("8")) return "62"+digits;
  return digits;
  }


  function validate(){
    const e = {};
    if(!form.name.trim()) e.name = "Wajib";
    if(!form.customerWa.trim()) e.customerWa = "Wajib";
    if(!form.pickupAddr.trim()) e.pickupAddr = "Wajib";
    if(!form.destAddr.trim()) e.destAddr = "Wajib";
    if(!form.bookingDate) e.bookingDate = "Wajib";
    if(!form.bookingTime) e.bookingTime = "Wajib";
    if(!form.service.trim()) e.service = "Wajib";
    setErrors(e);
    return Object.keys(e).length === 0;
  }


  const message = useMemo(()=>buildMessage(form, SITE_DOMAIN), [form]);


  function onSend(){
  if(!validate()) return;
  const nomor = normalizeIndoPhone(BUSINESS_WA);
  const pesan = encodeURIComponent(message); // pastikan selalu di-encode
  const url  = `https://api.whatsapp.com/send?phone=${normalizeIndoPhone(BUSINESS_WA)}&text=${encodeURIComponent(message)}`;
;
  window.open(url, "_blank");
}



  async function onCopy(){
    try{ await navigator.clipboard.writeText(message); setCopied(true); setTimeout(()=>setCopied(false), 1500);}catch(e){ alert("Gagal menyalin"); }
  }


  return (
  <div className="card">
  <h2>Booking via WhatsApp</h2>
  <div className="grid">
  <Field label="Nama" error={errors.name}>
  <input value={form.name} onChange={(e)=>setField("name", e.target.value)} placeholder="Aldo" />
  </Field>
  <Field label="Nomor WhatsApp" error={errors.customerWa}>
    <input value={form.customerWa} onChange={(e)=>setField("customerWa", e.target.value)} placeholder="0812xxxxxxx" />
  </Field>
  <Field label="Alamat Jemput" full error={errors.pickupAddr}>
  <input value={form.pickupAddr} onChange={(e)=>setField("pickupAddr", e.target.value)} placeholder="Jalan Margonad" />
  </Field>
  <Field label="Alamat Tujuan" full error={errors.destAddr}>
  <input value={form.destAddr} onChange={(e)=>setField("destAddr", e.target.value)} placeholder="Jalan Margonduy" />
  </Field>
  <Field label="Tanggal Booking" error={errors.bookingDate}>
  <input type="date" value={form.bookingDate} onChange={(e)=>setField("bookingDate", e.target.value)} />
  </Field>
  <Field label="Jam Booking" error={errors.bookingTime}>
  <input type="time" value={form.bookingTime} onChange={(e)=>setField("bookingTime", e.target.value)} />
  </Field>
  <Field label="Layanan" error={errors.service}>
  <select value={form.service} onChange={(e)=>setField("service", e.target.value)}>
  <option>Sewa Blindvan</option>
  <option>Sewa Pickup</option>
  <option>Sewa Truk CDD</option>
  <option>Antar Kota Instan</option>
  <option>Pindahan Rumah/Kantor</option>
  </select>
  </Field>
  </div>


  <div className="actions">
  <button className="btn primary" onClick={onSend}>Kirim ke WhatsApp Admin</button>
  <button className="btn" onClick={onCopy}>{copied ? "Tersalin!" : "Salin Pesan"}</button>
  </div>


  <h3>Preview Pesan</h3>
  <pre className="preview">{message}</pre>
  </div>
  );
}

function Field({label, error, children, full}){
  return (
  <label className={`field${full?" full":""}`}>
  <span>{label}</span>
  {children}
  {error && <em className="error">{error}</em>}
  </label>
  );
}

function buildMessage({ name, customerWa, pickupAddr, destAddr, bookingDate, bookingTime, service }, domain){
  const s = (v)=> (v||"").trim();
  return [
  `Halo admin ${domain} Perkenalkan Nama Saya ${s(name)} Saya Mau Konsultasi`,
  `*Data Saya :*`,
  `Nomer Whatsapp : ${s(customerWa)}`,
  `Alamat Jemput : ${s(pickupAddr)}`,
  `Alamat Tujuan : ${s(destAddr)}`,
  `Tanggal Booking : ${s(bookingDate)}`,
  `Jam Booking : ${s(bookingTime)}`,
  `Layanan : ${s(service)}`,
  `Terima Kasih.`
  ].join("\n");
}