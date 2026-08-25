import React from 'react';
import { TEMPLATES } from '../data/templates';

export default function TemplateShowcase() {
  return (
    <section id="template" className="py-20 bg-lume-white border-y border-lume-charcoal/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[11px] tracking-[0.25em] uppercase text-lume-rose font-medium">Katalog Desain</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-lume-charcoal font-normal">
            Pilih Desain Favoritmu
          </h2>
          <p className="text-xs sm:text-sm text-lume-taupe font-light max-w-lg mx-auto">
            Setiap pasangan punya cerita yang berbeda. Pilih desain yang paling menggambarkan cerita kalian.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEMPLATES.map((tpl) => (
            <div
              key={tpl.id}
              className="bg-[#FAF8F5] rounded-2xl overflow-hidden border border-lume-charcoal/10 flex flex-col justify-between group transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative h-64 overflow-hidden bg-lume-charcoal/5">
                  <img
                    src={tpl.image}
                    alt={tpl.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-lume-charcoal/80 backdrop-blur-md text-lume-bg text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                    {tpl.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-2xl text-lume-charcoal font-normal">{tpl.name}</h3>
                  <p className="text-xs text-lume-taupe font-light leading-relaxed">
                    {tpl.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-2">
                {/* Replace with actual template demo URL */}
                <a
                  href={tpl.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 border border-lume-charcoal/20 text-lume-charcoal text-xs font-semibold tracking-[0.15em] uppercase rounded-full hover:border-lume-rose hover:text-lume-rose transition-colors"
                >
                  {tpl.category === 'CUSTOM' ? 'Lihat Showcase' : 'Preview Demo'}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}