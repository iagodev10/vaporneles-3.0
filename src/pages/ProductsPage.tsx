import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight, Zap, Shield, Droplets, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const allProducts = [
  {
    id: 'lv-23',
    name: 'LV - 23 15kw',
    type: 'Industrial Premium',
    desc: 'Equipamento de alta performance para uso contínuo em ambientes industriais e frotas pesadas. Construída em aço inox ou aço carbono revestido.',
    longDesc: 'A LV-23 é o carro-chefe da Equip Wash Steamer. Com 15kw de potência, ela entrega um vapor seco constante e de alta pressão, ideal para descontaminação profunda, limpeza de motores pesados, chassis e grandes áreas industriais sem interrupções.',
    image: 'https://images.unsplash.com/photo-1574631258261-e40a0224ce7a?auto=format&fit=crop&q=80&w=800',
    stats: { pressure: '15 bar', temp: '180°C', weight: '85kg', power: '15kw' },
    features: ['Uso Profissional', 'Disponível em Inox', '100% Produção Nacional']
  },
  {
    id: 'lv-15',
    name: 'LV - 15 Portátil',
    type: 'Potencia Versátil',
    desc: 'Mobilidade total para serviços móveis sem abrir mão da força característica da nossa tecnologia de vapor.',
    longDesc: 'Projetada para delivery e estética automotiva móvel, a LV-15 combina um chassi leve com um gerador de vapor de altíssima eficiência. Perfeita para quem busca agilidade e resultados profissionais em qualquer lugar.',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800',
    stats: { pressure: '10 bar', temp: '160°C', weight: '25kg', power: '4.5kw' },
    features: ['Fácil Transporte', 'Aquecimento Rápido', 'Econômica']
  },
  {
    id: 'ev-7',
    name: 'EV - 7 Extratora',
    type: 'Soft Care',
    desc: 'A solução definitiva para higienização de estofados, sofás e tapetes com secagem quase instantânea.',
    longDesc: 'A EV-7 utiliza o vapor como agente sanitizante e desengraxante, aliado a um sistema de sucção potente que remove a sujeira e a umidade ao mesmo tempo. O resultado são fibras limpas, descontaminadas e prontas para uso em minutos.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800',
    stats: { pressure: '7 bar', temp: '140°C', weight: '15kg', power: '2.5kw' },
    features: ['Vapor e Sucção', 'Descontaminação', 'Uso Doméstico e Comercial']
  },
  {
    id: 'lv-13',
    name: 'LV - 13 Duas em Uma',
    type: 'Hybrid Power',
    desc: 'Equipamento versátil com duas saídas independentes, permitindo múltiplos operadores ou funções simultâneas.',
    longDesc: 'A versatilidade da LV-13 permite que você execute diferentes tarefas ao mesmo tempo. Ideal para oficinas que precisam de agilidade no detalhamento e na preparação de superfícies simultaneamente.',
    image: 'https://images.unsplash.com/photo-1590236170041-39611f753761?auto=format&fit=crop&q=80&w=800',
    stats: { pressure: '9 bar', temp: '155°C', weight: '35kg', power: '6kw' },
    features: ['Saída Dupla', 'Construção Robusta', 'Multitarefa']
  }
];

const accessories = [
  { name: 'Mangueiras R1 Reforçadas', desc: 'Resistentes a alta temperatura e abrasão.' },
  { name: 'Bicos de Alta Pressão', desc: 'Formatos variados para detalhamento preciso.' },
  { name: 'Gatilhos Ergonômicos', desc: 'Conforto para o operador em longas jornadas.' },
  { name: 'Pincéis e Escovas', desc: 'Resistentes ao vapor para limpeza mecânica.' }
];

export default function ProductsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-blue selection:text-black">
      <Navbar scrolled={scrolled} />
      
      {/* Search/Filter Hero Placeholder */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] opacity-20" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <div>
              <Link to="/" className="flex items-center gap-2 text-brand-orange text-sm font-bold mb-4 hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Início
              </Link>
              <h1 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter">
                Catálogo <span className="text-brand-blue neon-glow-cyan">Completo</span>
              </h1>
              <p className="text-text-dim max-w-xl mt-4 leading-relaxed">
                Explore a linha completa de geradores de vapor e extratoras Equip Wash Steamer. Tecnologia de ponta para profissionais que não aceitam menos que a perfeição.
              </p>
            </div>
            
            <div className="flex gap-4">
              <span className="badge">100% Produção Nacional</span>
              <span className="badge" style={{ backgroundColor: 'rgba(255,102,0,0.1)', borderColor: 'rgba(255,102,0,0.3)', color: '#FF6600' }}>Garantia Vitalícia no Chassi</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Products List */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {allProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Product Visual */}
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden glass border-white/10 group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Product Float Stats */}
                <div className="absolute -bottom-6 -right-6 md:right-0 glass p-6 rounded-2xl border-white/20 z-20 hidden md:block">
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(product.stats).slice(0, 2).map(([k, v]) => (
                      <div key={k}>
                        <div className="text-[10px] text-brand-orange font-black uppercase tracking-widest">{k}</div>
                        <div className="text-xl font-display font-bold">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <span className="text-brand-blue font-mono font-bold tracking-[0.3em] uppercase text-xs">
                    {product.type}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-white leading-none">
                    {product.name}
                  </h2>
                  <p className="text-lg text-text-dim leading-relaxed">
                    {product.longDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-t border-b border-white/5">
                  {product.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_8px_#FF6600]" />
                      <span className="text-sm font-semibold uppercase tracking-wider">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary flex items-center gap-3">
                    <ShoppingCart className="w-5 h-5" />
                    Solicitar Orçamento
                  </button>
                  <button className="btn-secondary">
                    Ficha Técnica (PDF)
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-24 bg-white/[0.02] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase">
                Acessórios <span className="text-brand-orange neon-glow-orange">Exclusivos</span>
              </h2>
              <p className="text-text-dim mt-4">Personalize sua experiência com componentes de grau industrial.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((acc, i) => (
              <motion.div
                key={acc.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl glass border-white/5 hover:border-brand-orange/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white mb-2 uppercase tracking-wide">{acc.name}</h3>
                <p className="text-xs text-text-dim leading-relaxed">{acc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[40px] border-brand-orange/20 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-display font-black uppercase mb-8">
            Dúvidas sobre o melhor <span className="text-brand-blue neon-glow-cyan text-gradient">Equipamento?</span>
          </h2>
          <p className="text-text-dim text-lg mb-12 max-w-xl mx-auto">
            Nossos especialistas estão prontos para oferecer uma consultoria gratuita para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary !px-12 !py-5 text-lg">
              Falar com Especialista
            </button>
            <div className="flex flex-col items-start font-mono">
              <span className="text-[10px] text-brand-orange font-black tracking-widest uppercase">WhatsApp Direto</span>
              <span className="text-xl font-bold">(11) 9999-9999</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
