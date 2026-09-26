import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-site container-px">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
              <img
                src="https://images.pexels.com/photos/11911863/pexels-photo-11911863.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Interior de boutique de moda"
                loading="lazy"
                className="h-[340px] w-full object-cover sm:h-[460px] lg:h-[560px]"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -right-3 -top-3 h-16 w-16 rounded-tl-[1.5rem] border-r-2 border-t-2 border-gold-300 sm:-right-5 sm:-top-5 sm:h-24 sm:w-24" />
            <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-br-[1.5rem] border-b-2 border-l-2 border-gold-300 sm:-bottom-5 sm:-left-5 sm:h-24 sm:w-24" />
          </div>

          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              Nossa história
            </span>
            <h2 className="mt-4 font-serif text-3xl text-ink-900 sm:text-4xl lg:text-[2.75rem] text-balance">
              Moda com propósito, <span className="italic text-gold-500">desde 2018</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-500">
              A ÁUREA nasceu do desejo de oferecer moda atemporal, com peças que
              combinam conforto, qualidade e estilo. Cada item da nossa curadoria
              é pensado para quem busca se expressar através do que veste — sem
              abrir mão da sofisticação.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              Trabalhamos com tecidos selecionados, modelagens precisas e
              acabamentos de excelência, para que cada peça acompanhe você por
              muitas estações.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-ink-100 pt-6">
              <div>
                <p className="font-serif text-2xl font-bold text-gold-600">2018</p>
                <p className="text-xs uppercase tracking-wider text-ink-400">Fundação</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-gold-600">+120</p>
                <p className="text-xs uppercase tracking-wider text-ink-400">Peças</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-gold-600">+8k</p>
                <p className="text-xs uppercase tracking-wider text-ink-400">Clientes</p>
              </div>
            </div>

            <a
              href="#produtos"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-900 transition-colors hover:text-gold-600"
            >
              Conheça nossa coleção
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
