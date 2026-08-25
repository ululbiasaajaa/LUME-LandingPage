import React, { useState } from 'react';
import { WHATSAPP_LINK } from '../data/templates';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Paket', href: '#paket' },
    { name: 'Template', href: '#template' },
    { name: 'Cara Order', href: '#cara-order' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-lume-bg/90 backdrop-blur-md border-b border-lume-charcoal/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <a href="#" className="font-serif text-2xl tracking-[0.2em] font-normal text-lume-charcoal hover:text-lume-rose transition-colors">
          LUME
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xs uppercase tracking-[0.15em] text-lume-charcoal/80 hover:text-lume-rose font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-lume-charcoal text-lume-bg text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-lume-rose transition-all duration-300 shadow-sm"
          >
            💬 WhatsApp
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-lume-charcoal hover:text-lume-rose focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-lume-bg border-b border-lume-charcoal/10 px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm uppercase tracking-[0.15em] text-lume-charcoal hover:text-lume-rose font-medium py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-lume-charcoal/10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 bg-lume-charcoal text-lume-bg text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-lume-rose transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}