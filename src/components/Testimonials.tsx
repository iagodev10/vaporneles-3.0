import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Oliveira',
    role: 'Detailing Studio Owner',
    text: 'A LV-23 mudou o jogo aqui. O tempo de entrega dos carros diminuiu 40% e a qualidade da higienização interna é impecável.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Roberto Silva',
    role: 'Gestor de Frotas',
    text: 'Economia brutal de água e rapidez na limpeza de motores sem o risco de danificar nada. Equipamento robusto que não para.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Ana Paula',
    role: 'Empreendedora ECO',
    text: 'A extratora EV-7 é simplesmente fantástica para sofás. O vapor seco permite que o cliente use o móvel logo após a limpeza.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
            <MessageSquareQuote className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-black">Depoimentos</h2>
            <p className="text-white/40 text-sm">O que nossos parceiros estão dizendo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass border-white/5 relative group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-blue text-brand-blue" />
                ))}
              </div>
              
              <p className="text-lg text-white/70 italic leading-relaxed mb-8">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/20"
                />
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-[10px] uppercase font-mono text-white/40 tracking-wider font-semibold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
