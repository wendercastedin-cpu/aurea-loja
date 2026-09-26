import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-site container-px">
        <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gold-50 px-6 py-14 sm:px-12 sm:py-16 lg:py-20">
          {/* Decorative dots */}
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-gold-200 sm:right-10 sm:top-10 sm:h-32 sm:w-32" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gold-100/60" />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              Newsletter
            </span>
            <h2 className="mt-4 font-serif text-3xl text-ink-900 sm:text-4xl lg:text-[2.5rem] text-balance">
              Receba nossas novidades
            </h2>
            <p className="mt-4 text-sm text-ink-500 sm:text-base">
              Cadastre seu e-mail e seja o primeiro a saber sobre lançamentos,
              promoções exclusivas e estilo.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="w-full flex-1 rounded-full border border-ink-200 bg-white px-5 py-3.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-gold-400"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gold-500 hover:text-ink-900"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" strokeWidth={2} />
                    Cadastrado!
                  </>
                ) : (
                  <>
                    Cadastrar
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </>
                )}
              </button>
            </form>
            <p className="mt-4 text-xs text-ink-400">
              Você pode cancelar a inscrição a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
