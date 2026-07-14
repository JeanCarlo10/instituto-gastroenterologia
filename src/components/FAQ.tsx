import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { SlideUp } from "@/animations";

const faqs = [
  {
    question: "Quem tem direito à aposentadoria?",
    answer:
      "O direito à aposentadoria depende de fatores como idade, tempo de contribuição, atividade exercida e regras de transição vigentes. Cada caso deve ser analisado individualmente para identificar a modalidade mais vantajosa.",
  },
  {
    question: "Posso me aposentar mesmo sem ter contribuído por muitos anos?",
    answer:
      "Em algumas situações, é possível utilizar períodos de trabalho não registrados corretamente, atividade rural, tempo especial ou outros vínculos para complementar o tempo necessário. Uma análise previdenciária pode identificar essas possibilidades.",
  },
  {
    question: "Meu benefício foi negado pelo INSS. O que devo fazer?",
    answer:
      "O indeferimento não significa o fim do processo. É possível apresentar recurso administrativo ou buscar a revisão judicial da decisão, dependendo do caso e da documentação disponível.",
  },
  {
    question: "Tenho direito ao auxílio-doença?",
    answer:
      "O auxílio por incapacidade temporária pode ser concedido ao segurado que esteja impossibilitado de trabalhar em razão de doença ou acidente, desde que atendidos os requisitos legais e comprovada a incapacidade por perícia médica.",
  },
  {
    question: "Como funciona o planejamento previdenciário?",
    answer:
      "O planejamento previdenciário é um estudo detalhado do histórico contributivo do segurado, permitindo identificar a melhor estratégia para aposentadoria, reduzir riscos e buscar o benefício mais vantajoso possível.",
  },
  {
    question: "Posso revisar o valor da minha aposentadoria?",
    answer:
      "Sim. Em determinadas situações, erros de cálculo, períodos não considerados ou alterações legislativas podem justificar uma revisão do benefício. É importante realizar uma análise especializada para verificar a viabilidade do pedido.",
  },
  {
    question: "Quem tem direito à pensão por morte?",
    answer:
      "A pensão por morte é destinada aos dependentes do segurado falecido, observando os requisitos previstos em lei. O direito e o valor do benefício variam conforme a situação familiar e previdenciária do falecido.",
  },
  {
    question: "Quanto tempo demora um processo previdenciário?",
    answer:
      "O prazo pode variar de acordo com a complexidade do caso, a fase do processo e os órgãos responsáveis pela análise. Alguns pedidos são resolvidos administrativamente, enquanto outros podem exigir atuação judicial.",
  },
];

const container: Variants = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const FAQ = () => {
  return (
    <section id="faq" className="bg-(--gold-soft)/20 py-20">
      <div className="container mx-auto overflow-hidden px-6 md:px-8">
        <div className="mb-12 text-center">
          <motion.span
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-(--gold-deep)"
          >
            Dúvidas
          </motion.span>

          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-4 mb-4 font-display text-3xl md:text-4xl lg:text-5xl text-(--foreground)"
          >
            Confira as perguntas mais frequentes
            <br className="hidden md:block" />
            <span className="md:inline"> e tire suas dúvidas</span>
          </motion.h2>

          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hairline mt-8 mx-auto w-32"
          ></motion.div>
        </div>

        <div className="mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={item}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="overflow-hidden rounded-2xl border border-white bg-(--card) px-5 transition-colors duration-300 data-[state=open]:border-(--primary)"
                  >
                    <AccordionTrigger className="group cursor-pointer py-5 text-left hover:no-underline [&>svg]:hidden">
                      <div className="flex w-full items-center justify-between gap-6">
                        <span className="pr-2 text-base leading-6 text-(--foreground) transition-colors duration-300">
                          {faq.question}
                        </span>

                        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--gold-soft)/15 transition-all duration-300 group-hover:bg-(--gold-soft)/25">
                          <span className="absolute h-0.5 w-4 rounded-full bg-(--primary) transition-all duration-300" />
                          <span className="absolute h-4 w-0.5 rounded-full bg-(--primary) transition-all duration-300 group-data-[state=open]:scale-y-0" />
                        </span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="overflow-hidden pb-5">
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="text-(--muted-foreground) leading-6"
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </motion.div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
