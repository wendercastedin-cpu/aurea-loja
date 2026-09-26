import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white pt-20 lg:pt-24">
      <div className="max-w-site container-px">
        <div className="grid items-center gap-8 pb-12 pt-8 sm:pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-16">
          {/* Text */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-600">
                <span className="h-px w-8 bg-gold-400" />
                Nova Coleção 2026
              </span>
              <h1 className="mt-5 font-serif text-[2.5rem] leading-[1.05] text-ink-900 sm:text-6xl lg:text-[4.2rem] text-balance">
                Seu estilo <br className="hidden sm:block" />
                começa <span className="italic text-gold-500">aqui.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500 sm:text-lg">
                Moda que combina com você, com peças selecionadas para transformar
                seu dia a dia.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#produtos"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gold-500 hover:text-ink-900"
                >
                  Ver coleção
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center rounded-full border border-ink-200 px-7 py-3.5 text-sm font-medium text-ink-800 transition-all duration-300 hover:border-ink-900 hover:bg-ink-50"
                >
                  Conheça a loja
                </a>
              </div>
              {/* Stats */}
              <div className="mt-10 flex items-center gap-8 border-t border-ink-100 pt-6">
                <div>
                  <p className="font-serif text-2xl font-bold text-ink-900">+120</p>
                  <p className="text-xs uppercase tracking-wider text-ink-400">Peças</p>
                </div>
                <div className="h-8 w-px bg-ink-100" />
                <div>
                  <p className="font-serif text-2xl font-bold text-ink-900">+8k</p>
                  <p className="text-xs uppercase tracking-wider text-ink-400">Clientes</p>
                </div>
                <div className="h-8 w-px bg-ink-100" />
                <div>
                  <p className="font-serif text-2xl font-bold text-ink-900">4.9</p>
                  <p className="text-xs uppercase tracking-wider text-ink-400">Avaliação</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative animate-fade-in">
              <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                <img
                  src="https://images.pexels.com/photos/39647617/pexels-photo-39647617.jpeg?auto=compress&cs=tinysrgb&w=1100"
                  alt="Modelo vestindo jaqueta e saia estilosa"
                  className="h-[420px] w-full object-cover object-center sm:h-[520px] lg:h-[640px]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm sm:left-8 lg:-left-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100">
                  <span className="font-serif text-lg font-bold text-gold-700">30%</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Off na nova coleção</p>
                  <p className="text-xs text-ink-400">Por tempo limitado</p>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-gold-200 sm:-right-6 sm:-top-6 sm:h-28 sm:w-28" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
