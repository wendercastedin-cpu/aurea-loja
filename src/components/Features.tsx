import { Truck, ShieldCheck, Headphones, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Envio para todo o Brasil',
    description: 'Entrega rápida e segura em qualquer região do país.',
  },
  {
    icon: ShieldCheck,
    title: 'Compra segura',
    description: 'Pagamento protegido e dados criptografados.',
  },
  {
    icon: Headphones,
    title: 'Atendimento personalizado',
    description: 'Nossa equipe pronta para ajudar você a escolher.',
  },
  {
    icon: BadgeCheck,
    title: 'Qualidade garantida',
    description: 'Tecidos selecionados e acabamento de excelência.',
  },
];

export default function Features() {
  return (
    <section className="border-y border-ink-100 bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-site container-px">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-ink-900">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink-900">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
