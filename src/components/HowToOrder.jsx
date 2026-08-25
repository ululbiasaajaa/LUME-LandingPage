import React from 'react';
import { WHATSAPP_LINK } from '../data/templates';

export default function HowToOrder() {
  const steps = [
    { num: "01", title: "Pilih Paket", desc: "Tentukan paket yang sesuai kebutuhan" },
    { num: "02", title: "Pilih Template", desc: "Pilih desain undangan favorit kalian" },
    { num: "03", title: "Kirim Data & Foto", desc: "Isi form detail acara & pasangan" },
    { num: "04", title: "Pembayaran", desc: "Lakukan konfirmasi pembayaran" },
    { num: "05", title: "Undangan Siap", desc: "Link undangan siap dibagikan" },
  ];

  return (
    <section id="cara-order" className="py-20 bg-lume-white border-y border-lume-charcoal/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-16">
          <span className="text-[11px] tracking-[0.25em] uppercase text-lume-rose font-medium">Alur Pemesanan</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-lume-charcoal font-normal">
            Cara Order
          </h2>
          <p className="text-xs sm:text-sm text-lume-taupe font-light">Prosesnya sederhana dan praktis.</p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center relative">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-[#FAF8F5] p-6 rounded-2xl border border-lume-charcoal/5 space-y-2 relative">
              <span className="font-serif text-3xl font-light text-lume-rose block">{step.num}</span>
              <h3 class="font-serif text-lg text-lume-charcoal font-normal">{step.title}</h3>
              <p className="text-[11px] text-lume-taupe font-light">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-lume-charcoal text-lume-bg text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-lume-rose transition-all shadow-sm"
          >
            💬 Pesan Sekarang via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}