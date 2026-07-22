import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp } from "@/animations";
import { Quote, X } from "lucide-react";

const items = [
  {
    quote: "Recebi um atendimento claro, humano e muito profissional.",
    author: "Marcelo Ramos",
  },
  {
    quote:
      "Ótimo atendimento na clínica, excelente local e com ótimos profissionais. Um agradecimento ao Dr. Cicero Bertoli, por ser um profissional extremamente empático e prestativo, me ajudou muito.",
    author: "Guilherme Gouveia",
  },
  {
    quote:
      "Excelente atendimento e equipe médica qualificada. Recomendo. Desde a recepção até o atendimento médico tudo foi impecável, superando minhas expectativas em todos os aspectos.",
    author: "Fabricio Mussi",
  },
];

const Reviews = () => {
  const [selected, setSelected] = useState<(typeof items)[0] | null>(null);
  const [expanded, setExpanded] = useState<boolean[]>([]);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  return (
    <>
      <section id="reviews" className="py-20 bg-(--secondary)">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <motion.span
              variants={SlideUp(0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] uppercase text-(--gray-dark)"
            >
              Depoimentos
            </motion.span>

            <motion.h2
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-4 mb-4 font-display text-3xl md:text-4xl lg:text-5xl text-(--gray-medium)"
            >
              O que dizem nossos pacientes
            </motion.h2>

            <motion.div
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="hairline mt-9 mx-auto w-32"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {items.map((item, index) => (
              <ReviewCard
                key={item.author}
                item={item}
                index={index}
                expanded={expanded}
                setExpanded={setExpanded}
                onOpen={() => setSelected(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.35 }}
              className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-10 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 rounded-full p-2 cursor-pointer hover:bg-gray-100 transition"
              >
                <X size={20} />
              </button>

              <Quote size={42} className="text-(--primary)" strokeWidth={1.6} />

              <p className="mt-8 text-xl leading-9 text-(--gray-dark)">
                “{selected.quote}”
              </p>

              <div className="mt-10 border-t pt-6">
                <span className="uppercase tracking-[0.2em] text-(--primary) text-sm font-medium">
                  {selected.author}
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

type CardProps = {
  item: {
    quote: string;
    author: string;
  };
  index: number;
  expanded: boolean[];
  setExpanded: React.Dispatch<React.SetStateAction<boolean[]>>;
  onOpen: () => void;
};

function ReviewCard({ item, index, expanded, setExpanded, onOpen }: CardProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current) {
      const isOverflow = ref.current.scrollHeight > ref.current.clientHeight;

      setExpanded((old) => {
        const arr = [...old];
        arr[index] = isOverflow;
        return arr;
      });
    }
  }, []);

  return (
    <motion.figure
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.35 }}
      className="
        h-[380px]
        rounded-3xl
        border
        border-(--primary)/15
        bg-(--card)
        p-9
        shadow-card
        hover:shadow-[0_25px_60px_rgba(13,178,107,.15)]
        transition-all
        flex
        flex-col
      "
    >
      <Quote size={40} className="text-(--primary)" strokeWidth={1.5} />

      <blockquote className="mt-6">
        <p
          ref={ref}
          className="
            line-clamp-3
            text-xl
            leading-9
            text-(--gray-dark)
          "
        >
          “{item.quote}”
        </p>

        {expanded[index] && (
          <button
            onClick={onOpen}
            className="
              mt-5
              text-(--primary)
              font-medium
              cursor-pointer
              hover:underline
            "
          >
            Ver mais
          </button>
        )}
      </blockquote>

      <div className="mt-auto">
        <div className="border-t border-(--border) pt-6">
          <span className="uppercase tracking-[0.2em] text-sm text-(--primary)">
            {item.author}
          </span>
        </div>
      </div>
    </motion.figure>
  );
}

export default Reviews;
