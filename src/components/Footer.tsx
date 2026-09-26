import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = ['Início', 'Produtos', 'Categorias', 'Sobre nós', 'Contato'];
const helpLinks = ['Trocas e devoluções', 'Entrega', 'Tabela de medidas', 'FAQ', 'Política de privacidade'];

export default function Footer() {
  return (
    <footer id="contato" className="bg-ink-900 text-white">
      <div className="max-w-site container-px py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <span className="font-serif text-2xl font-bold tracking-tight">
              ÁUREA
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Moda que combina com você. Peças selecionadas para transformar seu
              dia a dia, com qualidade e estilo atemporal.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-ink-900"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Navegação
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/60 transition-colors hover:text-gold-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Ajuda
            </h4>
            <ul className="mt-5 space-y-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/60 transition-colors hover:text-gold-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Contato
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                Rua das Flores, 1234 — Jardim Paulista, São Paulo/SP
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                (11) 4000-1234
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                contato@aurea.com.br
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs text-white/40">Horário de atendimento</p>
              <p className="mt-1 text-sm text-white/70">Seg a Sex, 9h às 18h</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2026 ÁUREA Moda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 transition-colors hover:text-white/70">
              Termos de uso
            </a>
            <a href="#" className="text-xs text-white/40 transition-colors hover:text-white/70">
              Privacidade
            </a>
            <span className="text-xs text-white/30">CNPJ 00.000.000/0001-00</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
