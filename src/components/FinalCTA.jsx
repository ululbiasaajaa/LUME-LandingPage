import React from 'react';
import { WHATSAPP_LINK } from '../data/templates';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-lume-charcoal text-lume-bg text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
          Sudah siap membuat undanganmu?
        </h2>
        <p className="text-xs sm:text-sm text-lume-bg/70 font-light max-w-md mx-auto leading-relaxed">
          Pilih desain favoritmu dan mulai buat undangan digital untuk hari spesialmu.
        </p>
        <div className="pt-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-9 py-4 bg-lume-rose text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-white hover:text-lume-charcoal transition-all duration-300 shadow-lg"
          >
            💬 Pesan via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}