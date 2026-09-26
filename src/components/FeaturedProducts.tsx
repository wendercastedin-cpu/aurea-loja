import { ShoppingBag } from 'lucide-react';
import { products, formatPrice } from '@/data/products';

export default function FeaturedProducts() {
  return (
    <section id="produtos" className="bg-ink-50/40 py-16 sm:py-20 lg:py-28">
      <div className="max-w-site container-px">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              Seleção especial
            </span>
            <h2 className="mt-3 font-serif text-3xl text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Destaques da semana
            </h2>
          </div>
          <a
            href="#produtos"
            className="text-sm font-medium text-ink-700 underline-offset-4 transition-colors hover:text-gold-600 hover:underline"
          >
            Ver todos os produtos
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-14 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-ink-50">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {product.badge && (
                  <span
                    className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      product.badge.startsWith('-')
                        ? 'bg-ink-900 text-white'
                        : 'bg-gold-400 text-ink-900'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <button
                  aria-label="Adicionar ao carrinho"
                  className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/95 text-ink-800 opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-gold-400 hover:text-ink-900 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <span className="text-[11px] uppercase tracking-wider text-ink-400">
                  {product.category}
                </span>
                <h3 className="mt-1 font-serif text-base text-ink-900 sm:text-lg">
                  {product.name}
                </h3>
                <div className="mt-auto flex items-baseline gap-2 pt-3">
                  {product.oldPrice && (
                    <span className="text-sm text-ink-300 line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                  <span className="text-base font-semibold text-ink-900">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <button className="mt-3 w-full rounded-full border border-ink-200 py-2.5 text-xs font-medium uppercase tracking-wider text-ink-700 transition-all duration-300 hover:border-ink-900 hover:bg-ink-900 hover:text-white">
                  Ver produto
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
