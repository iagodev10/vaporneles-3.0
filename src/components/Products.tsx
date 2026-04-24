import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight, Zap, Target, Layers } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'LV - 23 15kw',
    type: 'Industrial Power',
    desc: 'Construção robusta em inox ou aço. Ideal para limpeza pesada e frotas.',
    image: 'https://images.unsplash.com/photo-1574631258261-e40a0224ce7a?auto=format&fit=crop&q=80&w=800',
    stats: { pressure: '15 bar', temp: '180°C', weight: '85kg' }
  },
  {
    id: 2,
    name: 'LV - 15 Portátil',
    type: 'Compact Efficiency',
    desc: 'Mobilidade total sem perder a potência de higienização profunda.',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800',
    stats: { pressure: '10 bar', temp: '160°C', weight: '25kg' }
  },
  {
    id: 3,
    name: 'EV - 7 Extratora',
    type: 'Soft Solution',
    desc: 'Ideal para estofados e interiores. Extração e vapor simultâneos.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800',
    stats: { pressure: '7 bar', temp: '140°C', weight: '15kg' }
  }
];

import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <section id="produtos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black mb-4"
          >
            Nossas <span className="text-brand-blue">Máquinas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 max-w-xl mx-auto"
          >
            Engenharia de ponta para resultados impecáveis. Escolha a potência ideal para o seu negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden glass border-white/5"
            >
              <div className="absolute inset-0">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-brand-blue uppercase bg-brand-blue/10 px-2 py-1 rounded">
                    {product.type}
                  </span>
                </div>
                <h3 className="text-3xl font-display font-extrabold mb-3 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">{product.name}</h3>
                <p className="text-sm text-text-dim mb-6 leading-relaxed">
                  {product.desc}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(product.stats).map(([k, v]) => (
                    <div key={k} className="flex flex-col">
                      <span className="text-[10px] text-text-dim uppercase font-bold tracking-wider">{k}</span>
                      <span className="text-sm font-display font-bold text-white">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button className="flex-1 py-3 rounded-lg bg-brand-orange text-white font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,87,34,0.4)] transition-all">
                    <ShoppingCart className="w-4 h-4" />
                    Solicitar Orçamento
                  </button>
                  <Link to="/produtos">
                    <button className="p-3 rounded-lg glass border-white/10 hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-5 h-5 text-brand-blue" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
