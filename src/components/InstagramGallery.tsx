import { Instagram } from 'lucide-react';
import { instagramImages } from '@/data/products';

export default function InstagramGallery() {
  return (
    <section className="bg-ink-50/40 py-16 sm:py-20 lg:py-24">
      <div className="max-w-site container-px">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
            Inspiração
          </span>
          <h2 className="mt-3 font-serif text-3xl text-ink-900 sm:text-4xl">
            Siga no Instagram
          </h2>
          <p className="mt-3 max-w-md text-sm text-ink-500">
            Looks, novidades e bastidores da nossa marca. <br className="hidden sm:block" />
            <a href="#" className="font-medium text-ink-800 underline-offset-4 hover:text-gold-600 hover:underline">
              @aurea.moda
            </a>
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3 lg:mt-14 lg:grid-cols-6">
          {instagramImages.map((src, i) => (
            <a
              key={i}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt={`Look ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 opacity-0 transition-all duration-300 group-hover:bg-ink-900/40 group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
