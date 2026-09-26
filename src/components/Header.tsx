import { useEffect, useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-site container-px">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 select-none">
            <span className="font-serif text-2xl font-bold tracking-tight text-ink-900">
              ÁUREA
            </span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-gold-400 sm:block" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-ink-700 transition-colors hover:text-ink-900"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              aria-label="Buscar"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-900 sm:flex"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Carrinho"
              className="relative hidden h-10 w-10 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-900 sm:flex"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold-400 text-[10px] font-semibold text-ink-900">
                2
              </span>
            </button>
            <a
              href="#produtos"
              className="hidden items-center rounded-full bg-ink-900 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gold-500 hover:text-ink-900 lg:inline-flex"
            >
              Comprar agora
            </a>

            {/* Hamburger */}
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink-800 transition-colors hover:bg-ink-50 lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-400 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink-100">
            <span className="font-serif text-xl font-bold text-ink-900">ÁUREA</span>
            <button
              aria-label="Fechar"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-ink-50"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-ink-50 py-4 text-lg font-medium text-ink-800 transition-colors hover:text-gold-600"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 flex items-center gap-3">
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-700">
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-700">
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-400 text-[10px] font-semibold text-ink-900">
                  2
                </span>
              </button>
            </div>
            <a
              href="#produtos"
              onClick={() => setMenuOpen(false)}
              className="mt-6 flex items-center justify-center rounded-full bg-ink-900 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-gold-500 hover:text-ink-900"
            >
              Comprar agora
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
