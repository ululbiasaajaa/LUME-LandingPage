import React from 'react';
import { SOCIAL_LINKS } from '../data/templates';

export default function Footer() {
  return (
    <footer className="bg-[#1A1817] text-lume-bg py-12 border-t border-white/10 text-xs font-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left space-y-1">
            <span className="font-serif text-2xl tracking-[0.2em] font-normal text-white">LUME</span>
            <p className="text-[11px] text-lume-taupe">Digital Wedding Invitation</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-[11px] tracking-[0.15em] uppercase text-lume-bg/70">
            <a href="#" className="hover:text-lume-rose transition-colors">Home</a>
            <a href="#paket" className="hover:text-lume-rose transition-colors">Paket</a>
            <a href="#template" className="hover:text-lume-rose transition-colors">Template</a>
            <a href="#cara-order" className="hover:text-lume-rose transition-colors">Cara Order</a>
            <a href="#faq" className="hover:text-lume-rose transition-colors">FAQ</a>
          </nav>

          <div className="flex space-x-6 text-lume-bg/70 text-xs">
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-lume-rose transition-colors">WhatsApp</a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-lume-rose transition-colors">Instagram</a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-lume-rose transition-colors">TikTok</a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-[10px] text-lume-taupe">
          © 2026 LUME. All rights reserved.
        </div>

      </div>
    </footer>
  );
}