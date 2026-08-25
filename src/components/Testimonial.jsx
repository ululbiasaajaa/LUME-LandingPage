import React from 'react';

export default function Testimonial() {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-lume-charcoal/5">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
        <span class="inline-block px-3 py-1 bg-lume-rose/10 text-lume-rose text-[10px] font-semibold tracking-widest uppercase rounded-full">
          Customer Stories Coming Soon
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-lume-charcoal font-normal leading-relaxed">
          Dibuat untuk Hari yang Spesial
        </h2>
        <p className="text-xs sm:text-sm text-lume-taupe font-light leading-relaxed">
          Setiap undangan LUME dirancang dengan perhatian terhadap detail, agar momen spesialmu terasa semakin berkesan.
        </p>
      </div>
    </section>
  );
}