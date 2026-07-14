import { motion } from "framer-motion";
import { SlideUp } from "@/animations";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "Recebi um atendimento claro, humano e muito profissional.",
    author: "Marcelo Ramos",
  },
  {
    quote: "A Dra. Vanessa Ferraz conduziu meu caso com segurança e muita atenção.",
    author: "Andressa Soares",
  },
  {
    quote: "Excelente comunicação e orientação jurídica do início ao fim.",
    author: "Carlos Luiz",
  },
];

const Reviews = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-(--background)">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <motion.span
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-(--gold-deep)"
          >
            Depoimentos
          </motion.span>

          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-4 mb-4 font-display text-3xl md:text-4xl lg:text-5xl text-(--foreground)"
          >
            A confiança de quem já utilizou
            <br className="hidden md:block" />
            <span className="md:inline"> nossos serviços</span>
          </motion.h2>

          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hairline mt-9 mx-auto w-32"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.author}
              className="bg-(--card) rounded-2xl p-8 shadow-card border border-(--border)/50 hover:shadow-elevated transition-all flex flex-col hover:shadow-[0_24px_70px_rgba(156,125,61,0.18)]"
            >
              <Quote className="text-(--gold)" size={28} strokeWidth={1.5} />
              <blockquote className="mt-5 font-display text-lg lg:text-xl text-(--foreground) leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-(--border) text-sm tracking-widest uppercase text-(--primary)">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
