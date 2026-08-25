import React from 'react';

export default function WhyLume() {
  const features = [
    {
      icon: "📱",
      title: "Mobile Friendly",
      desc: "Nyaman dibuka melalui smartphone apapun tanpa merusak tampilan."
    },
    {
      icon: "🎨",
      title: "Elegant Design",
      desc: "Desain dibuat dengan perhatian penuh terhadap setiap detail tipografi dan tata letak."
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      desc: "Undangan disiapkan dengan cepat dan siap disebar sesuai jadwal kalian."
    },
    {
      icon: "🔗",
      title: "Easy to Share",
      desc: "Cukup bagikan satu link undangan cantik melalui WhatsApp atau media sosial."
    }
  ];

  return (
    <section id="keunggulan" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-16">
          <span className="text-[11px] tracking-[0.25em] uppercase text-lume-rose font-medium">Keunggulan</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-lume-charcoal font-normal">
            Kenapa LUME?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-lume-charcoal/5 space-y-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="text-3xl mb-1">{item.icon}</div>
              <h3 className="font-serif text-xl text-lume-charcoal font-normal">{item.title}</h3>
              <p className="text-xs text-lume-taupe font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}