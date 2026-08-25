import React, { useState } from 'react';
import { FAQS } from '../data/templates';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-lume-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] tracking-[0.25em] uppercase text-lume-rose font-medium">Bantuan</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-lume-charcoal font-normal">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] rounded-xl border border-lume-charcoal/10 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full text-left p-5 flex justify-between items-center space-x-4 focus:outline-none"
              >
                <span className="font-serif text-lg text-lume-charcoal font-normal">{faq.q}</span>
                <span className="text-lume-rose font-serif text-xl leading-none">
                  {openIdx === idx ? '−' : '+'}
                </span>
              </button>
              
              {openIdx === idx && (
                <div className="px-5 pb-5 pt-0 text-xs text-lume-taupe font-light leading-relaxed border-t border-lume-charcoal/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}