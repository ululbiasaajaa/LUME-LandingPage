import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import Pricing from './components/Pricing';
import TemplateShowcase from './components/TemplateShowcase';
import WhyLume from './components/WhyLume';
import HowToOrder from './components/HowToOrder';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#252321] font-sans antialiased selection:bg-lume-rose/20 selection:text-lume-charcoal">
      <Navbar />
      <Hero />
      <TrustIntro />
      <Pricing />
      <TemplateShowcase />
      <WhyLume />
      <HowToOrder />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}