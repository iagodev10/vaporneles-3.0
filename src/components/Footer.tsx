import { Wind, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark pt-24 pb-12 relative overflow-hidden border-t border-glass-border">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center">
                <Wind className="text-black w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-[4px] leading-none uppercase">Equip<span className="text-brand-blue">Wash</span></span>
                <span className="text-[10px] font-mono text-brand-orange uppercase font-black">#Vaporneles</span>
              </div>
            </div>
            <p className="text-text-dim text-sm leading-relaxed mb-6 max-w-xs">
              Engineered for perfection. Excedendo o visível com tecnologia de ponta e precisão industrial.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center hover:text-brand-blue hover:border-brand-blue/50 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center hover:text-brand-blue hover:border-brand-blue/50 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center hover:text-brand-blue hover:border-brand-blue/50 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-wide">Explorar</h4>
            <ul className="space-y-4">
              {['Produtos', 'Serviços', 'Acessórios', 'Manutenção', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 text-sm hover:text-brand-blue transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-brand-orange group-hover:w-4 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-wide">Suporte</h4>
            <ul className="space-y-4">
              {['Manual do Usuário', 'Garantia', 'Treinamentos', 'Peças Originais', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 text-sm hover:text-brand-orange transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-brand-orange group-hover:w-4 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-wide">Contato</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest leading-none mb-1">Telefone</p>
                  <p className="text-sm font-medium">(11) 9999-9999</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest leading-none mb-1">E-mail</p>
                  <p className="text-sm font-medium">contato@equipwash.com.br</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest leading-none mb-1">Endereço</p>
                  <p className="text-sm font-medium">São Paulo, SP - Brasil</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs font-medium">
            © {currentYear} Equip Wash Steamer. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs font-medium">Termos de Uso</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs font-medium">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
