import { motion } from "framer-motion";
import {
  RevealTitle,
  RevealSubtitle,
  RevealDivider,
  RevealCard,
  StaggerContainer,
  CardHover,
  FloatingIcon,
} from "@/animations";
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
    <section
      id="procedures"
      className="relative overflow-hidden py-28 bg-[#FCFCFB]"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.span
            variants={RevealTitle(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-(--gray-dark)"
          >
            Procedimentos
          </motion.span>

          <motion.h2
            variants={RevealSubtitle(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="italic mt-4 mb-4 font-bold text-3xl md:text-4xl lg:text-5xl text-(--gray-medium)"
          >
            Tratamentos e exames de <br /> alta precisão
          </motion.h2>

          <motion.div
            variants={RevealDivider(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hairline mt-9 mx-auto w-32"
          ></motion.div>
        </div>

        <motion.div
          variants={StaggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {procedures.map((procedure, index) => {
            const Icon = procedure.icon;

            return (
              <motion.a
                key={procedure.title}
                variants={RevealCard(index * 0.15)}
                {...CardHover}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-(--border)
                bg-(--card)
                p-8
                shadow-[0_20px_45px_rgba(2,25,18,.07)]
                transition-[background-color,border-color,box-shadow,transform]
                duration-500
                ease-out
                hover:border-(--primary)
                hover:bg-[#F7FDF9]
                "
              >
                <motion.div
                  variants={FloatingIcon}
                  whileHover={{
                    rotate: 2,
                    scale: 1.05,
                  }}
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
                </motion.div>

                <h3 className="mt-8 text-center text-2xl font-semibold leading-snug text-(--foreground)">
                  {procedure.title}
                </h3>

                {/* Linha */}
                <motion.div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-(--primary) transition-all duration-500 group-hover:w-24" />

                <p className="mt-6 text-center text-base leading-8 text-(--muted-foreground)">
                  {procedure.description}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Procedures;
