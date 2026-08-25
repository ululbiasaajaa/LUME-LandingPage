import React from 'react';
import { WHATSAPP_LINK } from '../data/templates';

export default function Hero() {
  const handleScrollToPackages = (e) => {
    e.preventDefault();
    const element = document.querySelector('#paket');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-lume-rose/10 border border-lume-rose/20 text-lume-rose text-[11px] uppercase tracking-[0.2em] font-medium">
              <span>✨ Digital Wedding Invitation</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-lume-charcoal font-normal leading-[1.15] tracking-tight">
              Undangan Digital untuk <br className="hidden sm:inline" />
              <span className="italic font-normal text-lume-rose">Hari yang Spesial.</span>
            </h1>

            <p className="text-sm sm:text-base text-lume-taupe font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Elegan, interaktif, dan dibuat untuk menjadi bagian dari cerita kalian.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#paket"
                onClick={handleScrollToPackages}
                className="w-full sm:w-auto px-8 py-3.5 bg-lume-charcoal text-lume-bg text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-lume-rose transition-all duration-300 shadow-sm text-center"
              >
                Lihat Paket
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 border border-lume-charcoal/30 text-lume-charcoal text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:border-lume-rose hover:text-lume-rose transition-all duration-300 text-center"
              >
                💬 Chat WhatsApp
              </a>
            </div>
          </div>

          {/* Right Smartphone CSS Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[270px] sm:w-[300px] h-[540px] sm:h-[580px] bg-lume-charcoal rounded-[40px] p-3 shadow-2xl border-4 border-lume-charcoal/20">
              {/* Phone Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-lume-charcoal rounded-b-2xl z-20"></div>

              {/* Screen Content Preview */}
              <div className="w-full h-full bg-[#121212] rounded-[30px] overflow-hidden relative flex flex-col justify-between p-6 text-center text-[#F5F3EF]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800')] bg-cover bg-center opacity-20"></div>
                
                <div className="relative z-10 pt-8">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#A0A0A0]">BASIC #1 — DARK ELEGANT</span>
                </div>

                <div className="relative z-10 space-y-2 my-auto">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#A0A0A0]">THE WEDDING OF</p>
                  <h3 className="font-serif text-3xl font-light text-[#F5F3EF]">Romeo &amp; Juliet</h3>
                  <div className="w-8 h-[1px] bg-[#C5A880] mx-auto my-1"></div>
                  <p className="text-[10px] tracking-[0.2em] text-[#A0A0A0]">25 . 10 . 2026</p>
                </div>

                <div className="relative z-10 pb-4">
                  <div className="py-2.5 px-4 border border-[#C5A880] text-[#F5F3EF] text-[10px] font-semibold tracking-[0.15em] uppercase">
                    Buka Undangan
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}