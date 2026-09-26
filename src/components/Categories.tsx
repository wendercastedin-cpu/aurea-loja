import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/data/products';

export default function Categories() {
  return (
    <section id="categorias" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-site container-px">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              Explore por
            </span>
            <h2 className="mt-3 font-serif text-3xl text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Categorias
            </h2>
          </div>
          <p className="max-w-xs text-sm text-ink-500 sm:text-right">
            Encontre exatamente o que procura entre as nossas curadorias de moda.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-14 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#produtos"
              className={`group relative block overflow-hidden rounded-2xl ${
                i === 0 ? 'lg:row-span-2 lg:h-full' : ''
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? 'h-[280px] sm:h-[340px] lg:h-full lg:min-h-[440px]' : 'h-[220px] sm:h-[280px] lg:h-[260px]'
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-white sm:text-2xl">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70 sm:text-sm">
                      {cat.description}
                    </p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-gold-400 group-hover:text-ink-900">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
