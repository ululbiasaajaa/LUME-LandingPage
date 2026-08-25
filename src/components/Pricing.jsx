import React from 'react';
import { PACKAGES, getWhatsAppPackageLink } from '../data/templates';

export default function Pricing() {
  const handleScrollToTemplate = (e) => {
    e.preventDefault();
    const element = document.querySelector('#template');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="paket" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-lume-rose/10 border border-lume-rose/20 text-lume-rose text-[11px] uppercase tracking-[0.2em] font-medium">
            <span>✨ LUME LAUNCHING OFFER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-lume-charcoal font-normal">
            Pilih Paket yang Sesuai
          </h2>
          <p className="text-xs sm:text-sm text-lume-taupe font-light max-w-lg mx-auto leading-relaxed">
            Harga perkenalan untuk beberapa pesanan pertama. Temukan desain yang paling sesuai dengan cerita dan kebutuhanmu.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-8 border flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                pkg.popular
                  ? 'border-lume-rose shadow-md ring-1 ring-lume-rose/30 md:-translate-y-2'
                  : 'border-lume-charcoal/10'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-lume-rose text-white text-[10px] font-semibold tracking-wider uppercase rounded-full shadow-sm whitespace-nowrap">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-lume-charcoal font-normal">{pkg.name}</h3>
                  <p className="text-xs text-lume-taupe font-light italic mt-1">{pkg.tagline}</p>
                </div>

                <div className="pt-2 border-t border-lume-charcoal/5 space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-lume-taupe line-through font-light">{pkg.normalPrice}</span>
                    <span className="text-[10px] bg-lume-rose/10 text-lume-rose px-2 py-0.5 rounded font-medium">LAUNCH OFFER</span>
                  </div>
                  <div className="font-serif text-4xl font-normal text-lume-charcoal">
                    {pkg.launchPrice}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-2 text-xs text-lume-charcoal/90 font-light">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <span className="text-lume-rose font-bold text-sm leading-none">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-6 border-t border-lume-charcoal/5 space-y-2.5">
                {/* Button 1: Pesan via WhatsApp (Direct Pre-filled Package Message) */}
                <a
                  href={getWhatsAppPackageLink(pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3.5 text-xs font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-lume-rose text-white hover:bg-lume-charcoal shadow-sm'
                      : 'bg-lume-charcoal text-lume-bg hover:bg-lume-rose'
                  }`}
                >
                  💬 {pkg.buttonText || `Pesan Paket ${pkg.name}`}
                </a>

                {/* Button 2: Scroll Halus ke Katalog Template */}
                <a
                  href="#template"
                  onClick={handleScrollToTemplate}
                  className="block w-full text-center py-2 text-[11px] font-medium tracking-[0.1em] text-lume-taupe hover:text-lume-rose uppercase transition-colors"
                >
                  {pkg.secondaryButtonText || 'Lihat Template'} ↓
                </a>
              </div>

            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-lume-taupe italic mt-8">
          *Harga launching berlaku untuk slot terbatas.
        </p>

      </div>
    </section>
  );
}