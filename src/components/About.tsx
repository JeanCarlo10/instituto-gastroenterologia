import { motion } from "framer-motion";
import { SlideUp } from "@/animations";
import { Award, Building2, ShieldCheck, HeartHandshake } from "lucide-react";
import AboutImage from "@/assets/About01.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 bg-[#9bd5bf]/10"
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-(--primary)/20 bg-(--primary)/5 px-5 py-2"
            >
              <Building2 size={18} className="text-(--primary)" />

              <span className="text-sm font-medium">
                Conheça nossa história
              </span>
            </motion.div>

            <motion.h2
              variants={SlideUp(0.15)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-(--gray-dark)"
            >
              Mais de
              <span className="text-(--primary)"> 20 anos </span>
              transformando a saúde digestiva
            </motion.h2>

            <motion.div
              variants={SlideUp(0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="hairline mt-8 mb-8 w-[35%]"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg leading-relaxed text-(--muted-foreground) mb-6"
            >
              Fundada em 2004, em Foz do Iguaçu, a Clínica IGC nasceu da união
              de um grupo de médicos dedicados ao cuidado especializado das
              doenças do aparelho digestivo. Inicialmente chamada de Instituto
              de Gastroenterologia e Cirurgia de Foz do Iguaçu, a clínica foi
              criada com o propósito de oferecer atendimento de excelência em
              gastroenterologia e cirurgia digestiva, unindo tecnologia,
              precisão diagnóstica e experiência médica.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg leading-relaxed text-(--muted-foreground) mb-6"
            >
              Desde sua origem, o IGC se tornou referência no tratamento de
              gastrite, úlceras, hérnias, cálculos na vesícula, refluxo,
              obesidade, cirurgias bariátricas, colocação de balão intra
              gástrico e diversas outras doenças que acometem o sistema
              gastrointestinal. Com o passar dos anos, a clínica ampliou seus
              serviços e modernizou sua estrutura com aparelhos de última
              geração, mantendo sempre o foco na precisão diagnóstica e na
              realização de procedimentos avançados, como endoscopia,
              colonoscopia, ecografia, manometria e phmetria esofágica, teste
              respiratório para diagnostico de super crescimento bacterianos e
              exames funcionais do aparelho digestivo.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg leading-relaxed text-(--muted-foreground)"
            >
              Atualmente, a Clínica IGC atua no diagnóstico e tratamento de
              doenças do aparelho digestivo, oferecendo um atendimento
              humanizado, seguro e baseado em protocolos
              atualizados.(Gastroenterologia Avançada). Nossa equipe médica é
              formada por profissionais altamente qualificados e comprometidos
              com a saúde e o bem-estar dos pacientes.
            </motion.p>

            <motion.div
              variants={SlideUp(0.75)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-10 grid grid-cols-2 gap-5"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-(--primary)/10 flex items-center justify-center">
                  <Award size={26} className="text-(--primary)" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Excelência Médica</h4>

                  <p className="text-(--muted-foreground)">Desde 2004</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-(--primary)/10 flex items-center justify-center">
                  <ShieldCheck size={26} className="text-(--primary)" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Segurança</h4>

                  <p className="text-(--muted-foreground)">
                    Protocolos atualizados
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-(--primary)/10 flex items-center justify-center">
                  <HeartHandshake size={26} className="text-(--primary)" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Atendimento</h4>

                  <p className="text-(--muted-foreground)">Humanizado</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={SlideUp(0.35)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-[720px]">
              <div className="absolute -right-16 top-20 w-[420px] h-[420px] rounded-full bg-(--primary)/15 blur-[110px]" />

              <div className="relative overflow-hidden rounded-[42px] bg-white p-3 shadow-[0_35px_90px_rgba(0,0,0,.18)]">
                <img
                  src={AboutImage}
                  alt="Clínica IGC"
                  className="h-[700px] w-full rounded-[32px] object-cover"
                />
              </div>

              {/* Overlay  */}
              <div className="absolute inset-0 rounded-[42px] bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
