import { motion } from "framer-motion";
import { SlideUp } from "@/animations";
import { ArrowRight } from "lucide-react";

import AposentadoriaBg from "@/assets/Aposentadoria.jpg";
import RevisaoBg from "@/assets/Revisao.jpg";
import AverbacaoBg from "@/assets/Averbação.jpg";
import AuxilioDoencaBg from "@/assets/Doença.jpg";
import BeneficioAssistencialBg from "@/assets/Beneficio.png";
import PensaoMorteBg from "@/assets/Pensao01.jpg";
import FamiliaBg from "@/assets/Familia.png";

const whatsappNumber = "45999999999";

const services = [
  {
    title: "Aposentadoria",
    description:
      "Orientação jurídica para análise, planejamento e requerimento de aposentadoria, buscando mais segurança em cada etapa do processo.",
    image: AposentadoriaBg,
    imagePosition: "center",
    whatsappMessage:
      "Olá, gostaria de mais informações sobre orientação jurídica para aposentadoria.",
  },
  {
    title: "Revisão de benefício",
    description:
      "Análise detalhada do benefício previdenciário para identificar possíveis erros, diferenças ou oportunidades de revisão junto ao INSS.",
    image: RevisaoBg,
    imagePosition: "center",
    whatsappMessage:
      "Olá, gostaria de saber mais sobre revisão de benefício previdenciário.",
  },
  {
    title: "Averbação de período rural e especial",
    description:
      "Atuação na comprovação e inclusão de períodos rurais ou especiais para fortalecer o histórico previdenciário e auxiliar no acesso ao benefício.",
    image: AverbacaoBg,
    imagePosition: "center",
    whatsappMessage:
      "Olá, gostaria de orientação sobre averbação de período rural ou especial.",
  },
  {
    title: "Auxílio-doença",
    description:
      "Orientação para segurados temporariamente incapazes de trabalhar, com análise de documentos médicos e acompanhamento do pedido.",
    image: AuxilioDoencaBg,
    imagePosition: "center",
    whatsappMessage: "Olá, gostaria de informações sobre auxílio-doença.",
  },
  {
    title: "Benefício assistencial",
    description:
      "Atendimento para análise de direito ao BPC/LOAS, voltado a idosos e pessoas com deficiência em situação de vulnerabilidade.",
    image: BeneficioAssistencialBg,
    imagePosition: "center",
    whatsappMessage:
      "Olá, gostaria de saber mais sobre benefício assistencial BPC/LOAS.",
  },
  {
    title: "Pensão por morte",
    description:
      "Acompanhamento jurídico para dependentes que buscam garantir o benefício após o falecimento de um familiar segurado.",
    image: PensaoMorteBg,
    imagePosition: "center",
    whatsappMessage: "Olá, gostaria de orientação sobre pensão por morte.",
  },
  {
    title: "Família",
    description:
      "Atuação em demandas familiares com acolhimento, clareza e responsabilidade, buscando soluções jurídicas seguras e humanizadas.",
    image: FamiliaBg,
    imagePosition: "center",
    whatsappMessage:
      "Olá, gostaria de mais informações sobre atendimento em Direito de Família.",
  },
];

const Areas = () => {
  return (
    <section id="areas" className="relative py-24 bg-(--background)">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.span
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-(--gold-deep)"
          >
            Áreas de atuação
          </motion.span>

          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-4 mb-4 font-display text-3xl md:text-4xl lg:text-5xl text-(--foreground)"
          >
            Direito previdenciário com clareza,
            <br className="hidden md:block" />
            <span className="md:inline"> estratégia e acolhimento</span>
          </motion.h2>

          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hairline mt-8 mx-auto w-32"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              service.whatsappMessage,
            )}`;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Falar com a advogada sobre ${service.title}`}
                  className="group/card relative block h-[430px] overflow-hidden cursor-pointer rounded-[1.75rem] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(156,125,61,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:ring-offset-4 focus-visible:ring-offset-(--background)"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                    style={{ objectPosition: service.imagePosition }}
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/15 transition-all duration-500 group-hover/card:from-black/90 group-hover/card:via-black/55" />

                  <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover/card:ring-(--gold)/60" />

                  <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-7">
                    <div className="translate-y-0 transition-transform duration-500 ease-out group-hover/card:-translate-y-1">
                      <h3 className="font-display text-3xl leading-tight text-white">
                        {service.title}
                      </h3>

                      <div className="hairline mt-5 w-full" />

                      <p className="mt-4 max-w-[95%] text-sm md:text-base leading-relaxed text-white/85 opacity-100 transition-all duration-500">
                        {service.description}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 text-(--gold-soft) font-medium ">
                        <span>Saiba mais</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Areas;
