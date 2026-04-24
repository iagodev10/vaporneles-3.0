import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-black">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-[100px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-150px] left-[-100px] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] mix-blend-screen opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      </div>

      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <Products />
        <Features />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
