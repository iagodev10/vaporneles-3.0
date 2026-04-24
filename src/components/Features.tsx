import { motion } from 'motion/react';
import { Droplets, ShieldCheck, Zap, Globe, Sparkles, Settings } from 'lucide-react';

const features = [
  {
    icon: <Droplets />,
    title: 'Economia de Água',
    desc: 'Utiliza até 95% menos água que métodos tradicionais de lavagem.'
  },
  {
    icon: <ShieldCheck />,
    title: '100% Segura',
    desc: 'Vapor seco que não danifica componentes eletrônicos ou tecidos sensíveis.'
  },
  {
    icon: <Settings />,
    title: 'Nacional',
    desc: 'Tecnologia desenvolvida no Brasil com garantia e peças de reposição imediatas.'
  },
  {
    icon: <Zap />,
    title: 'Produtividade',
    desc: 'Reduza o tempo de higienização pela metade com a força do vapor químico.'
  },
  {
    icon: <Globe />,
    title: 'Eco-Friendly',
    desc: 'Sem necessidade de produtos químicos agressivos. Vapor é sanitizante natural.'
  },
  {
    icon: <Sparkles />,
    title: 'Acabamento Premium',
    desc: 'Brilho superior e descontaminação total de superfícies e estofados.'
  }
];

export default function Features() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-display font-black leading-tight"
            >
              Por que a <span className="text-brand-blue">Equip Wash</span> é a escolha dos líderes?
            </motion.h2>
          </div>
          <div className="lg:text-right">
            <p className="text-white/40 max-w-sm mb-6">
              Mais que máquinas, entregamos soluções de alto rendimento para centros de detalhamento.
            </p>
            <div className="w-20 h-1 bg-brand-blue ml-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl glass border-white/5 hover:border-brand-blue/30 transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-sm mb-6 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-display font-bold mb-3 tracking-wide text-white uppercase group-hover:text-brand-blue transition-colors">{feat.title}</h3>
              <p className="text-xs text-text-dim leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
