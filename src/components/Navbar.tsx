import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Wind, Droplets, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Produtos', href: '#produtos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-black/60 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center relative overflow-hidden">
            <Wind className="text-black w-6 h-6 z-10" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-[4px] leading-none text-white uppercase">
              Vapor<span className="text-brand-blue neon-glow-cyan">neles</span>
            </span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-brand-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-blue transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full bg-brand-blue text-black font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group"
          >
            Contato
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-deep/95 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-display font-medium hover:text-brand-blue transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-4 rounded-xl bg-brand-blue text-black font-bold text-lg">
                Falar com Especialista
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
