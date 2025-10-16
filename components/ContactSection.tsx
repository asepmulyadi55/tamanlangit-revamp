"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-start">
        <div className="reveal">
          <h2 className="font-display text-4xl md:text-5xl font-semibold">Kontak</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Hubungi kami untuk pemesanan paket wisata atau informasi lebih lanjut.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>Email: info@tamanlangitpangalengan.com</li>
            <li>WhatsApp: 08xx-xxxx-xxxx</li>
            <li>Alamat: Pangalengan, Bandung</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="reveal rounded-2xl border p-6 shadow-soft">
          <label className="block text-sm">
            Nama
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border bg-transparent p-2" 
              placeholder="Nama Anda" 
            />
          </label>
          <label className="block text-sm mt-4">
            Email
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border bg-transparent p-2"
              placeholder="email@contoh.com" 
            />
          </label>
          <label className="block text-sm mt-4">
            Pesan
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border bg-transparent p-2" 
              rows={4}
              placeholder="Saya ingin tanya mengenai..."
            />
          </label>
          <button 
            type="submit"
            className="mt-4 px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
}