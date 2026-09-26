import { ArrowRight } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="max-w-site container-px">
        <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
          {/* Background image */}
          <img
            src="https://images.pexels.com/photos/1488470/pexels-photo-1488470.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Rack de roupas em loja"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/70" />

          {/* Content */}
          <div className="relative flex flex-col items-center justify-center px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-28">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Promoção da semana
            </span>
            <h2 className="mt-4 font-serif text-5xl text-white sm:text-6xl lg:text-7xl">
              Até <span className="text-gold-400">30% OFF</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/70 sm:text-base">
              Encontre seus favoritos por preços especiais.
            </p>
            <a
              href="#produtos"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-900 transition-all duration-300 hover:bg-white"
            >
              Ver ofertas
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
