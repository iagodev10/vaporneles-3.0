import { motion } from 'motion/react';
import { Play, ChevronDown, CheckCircle2, CloudLightning as Steam } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-full h-[600px] bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge"
          >
            The 2024 Collection
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-extrabold leading-[1.05] tracking-tight mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
          >
            A FORÇA DA <br />
            <span className="text-brand-blue neon-glow-cyan">LIMPEZA A VAPOR</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-dim max-w-lg mb-10 mx-auto lg:mx-0 leading-relaxed"
          >
            Sustentabilidade e tecnologia de ponta. Soluções 100% brasileiras para detalhamento automotivo e higienização profunda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link to="/produtos">
              <button className="btn-primary w-full sm:w-auto">
                Ver Produtos
              </button>
            </Link>
            <button className="btn-secondary flex items-center justify-center gap-2 group transition-all w-full sm:w-auto">
              <Play className="w-4 h-4 fill-brand-orange text-brand-orange group-hover:scale-110 transition-transform" />
              Ver Vídeo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-60"
          >
            {['100% Ecológico', 'Baixo Consumo', 'Alta Pressão'].map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                {feat}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex-1 relative w-full aspect-square max-w-lg lg:max-w-none"
        >
          {/* Main Visual */}
          <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden glass border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1200" 
              alt="High-end Car Detailing with Steam"
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent opacity-60" />
            
            {/* Floating Info */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-10 right-10 p-4 glass rounded-2xl border-white/20 z-20"
            >
              <div className="text-[10px] uppercase tracking-widest font-bold text-brand-blue mb-1">Potência</div>
              <div className="text-2xl font-display font-black">15KW</div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-10 left-10 p-4 glass rounded-2xl border-white/20 z-20"
            >
              <div className="text-[10px] uppercase tracking-widest font-bold text-brand-blue mb-1">Durabilidade</div>
              <div className="text-2xl font-display font-black">INOX</div>
            </motion.div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute -inset-4 border border-brand-blue/20 rounded-3xl z-0 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-8 border border-white/5 rounded-3xl z-0 animate-[spin_30s_linear_infinite_reverse]" />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer opacity-30 hover:opacity-100 transition-opacity"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
