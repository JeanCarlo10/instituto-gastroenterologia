import { motion } from "framer-motion";
import { SlideUp } from "@/animations";

import { Stethoscope, ScanLine, Activity, HeartPulse } from "lucide-react";

const procedures = [
  {
    title: "Endoscopia Digestiva",
    description:
      "Exame indicado para avaliação do esôfago, estômago e duodeno, permitindo diagnóstico preciso de diversas doenças.",
    icon: Stethoscope,
  },

  {
    title: "Colonoscopia",
    description:
      "Procedimento para investigação, prevenção e diagnóstico das doenças do intestino grosso.",
    icon: ScanLine,
  },

  {
    title: "Ecografia",
    description:
      "Ultrassonografia especializada para avaliação dos órgãos do aparelho digestivo.",
    icon: Activity,
  },

  {
    title: "Manometria Esofágica",
    description:
      "Exame funcional utilizado para avaliar a motilidade do esôfago.",
    icon: HeartPulse,
  },

  {
    title: "Teste Respiratório",
    description:
      "Método não invasivo para diagnóstico de supercrescimento bacteriano intestinal (SIBO).",
    icon: Activity,
  },

  {
    title: "Balão Intragástrico",
    description:
      "Procedimento minimamente invasivo para auxiliar no tratamento da obesidade.",
    icon: Stethoscope,
  },

  {
    title: "Cirurgia Bariátrica",
    description:
      "Tratamento cirúrgico da obesidade indicado para pacientes com critérios médicos específicos.",
    icon: HeartPulse,
  },

  {
    title: "Cirurgia Digestiva",
    description:
      "Procedimentos cirúrgicos modernos para tratamento das doenças do aparelho digestivo.",
    icon: ScanLine,
  },
];

const Procedures = () => {
  return (
    <section id="procedures" className="relative overflow-hidden py-28 bg-(--secondary)">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.span
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-(--gray-dark)"
          >
            Procedimentos
          </motion.span>

          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-4 mb-4 font-bold text-3xl md:text-4xl lg:text-5xl text-(--gray-medium)"
          >
            Tratamentos e exames de <br /> alta precisão
          </motion.h2>

          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hairline mt-9 mx-auto w-32"
          ></motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {procedures.map((procedure, index) => {
            const Icon = procedure.icon;

            return (
              <motion.a
                key={procedure.title}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: 0.05,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                group
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-(--primary-lighter)
                bg-(--card)
                p-8
                shadow-[0_10px_0px_rgba(0,0,0,.05)]
                transition-all
                duration-300
                hover:border-(--primary)/20
                hover:bg-(--primary-lighter)/10
                hover:shadow-[0_10px_0px_rgba(13,178,107,0.80)]
                "
              >
                <div
                  className="
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-(--primary)/8
                  transition-all
                  duration-300
                  group-hover:bg-(--primary)/12
                  "
                >
                  <Icon
                    size={42}
                    strokeWidth={1.7}
                    className="text-(--primary)"
                  />
                </div>

                <h3 className="mt-8 text-center text-2xl font-semibold leading-snug text-(--foreground)">
                  {procedure.title}
                </h3>

                {/* Linha */}
                <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-(--primary) transition-all duration-300 group-hover:w-24" />

                <p className="mt-6 text-center text-base leading-8 text-(--muted-foreground)">
                  {procedure.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
