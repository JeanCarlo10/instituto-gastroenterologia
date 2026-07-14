import { motion } from "framer-motion";
import { SlideUp } from "@/animations";
import Image from "@/assets/About4.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-(--gold-soft)/20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
          {/* TEXTO */}
          <div className="w-full lg:w-[45%]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.35em] text-(--gold-deep)"
            >
              Sobre
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-5 mb-8 font-display text-4xl md:text-5xl lg:text-6xl text-(--foreground)"
            >
              Vanessa Ferraz
            </motion.h2>

            <motion.div
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="hairline mt-8 mb-8"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg leading-relaxed text-(--muted-foreground) mb-6"
            >
              Vanessa Ferraz atua na área do Direito Previdenciário com o
              propósito de garantir que cada cliente tenha acesso aos benefícios
              e direitos assegurados pela legislação, conduzindo cada caso com
              responsabilidade, clareza e atenção individualizada.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg leading-relaxed text-(--muted-foreground)"
            >
              Com uma atuação pautada pela ética, transparência e compromisso,
              oferece orientação jurídica estratégica para aposentadorias,
              benefícios por incapacidade, pensões, revisões previdenciárias e
              demais demandas relacionadas à proteção social e à segurança
              jurídica de seus clientes.
            </motion.p>
          </div>

          <div className="w-full lg:w-[55%] flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              whileHover={{
                scale: 1.02,
              }}
              className="relative"
            >
              <img
                src={Image}
                alt="Advogada"
                className="w-full max-w-[650px] h-auto object-contain rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
