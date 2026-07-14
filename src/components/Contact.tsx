import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";
import { SlideUp } from "@/animations";
import VeronicaImage from "@/assets/Hero2.png";

const WHATSAPP_NUMBER = "45999999999";

const WHATSAPP_TEXT =
  "Olá! Gostaria de receber orientação sobre meu caso previdenciário.";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`;

// const MAPS_LINK = "https://maps.app.goo.gl/TBEZwSznr4E8xvRW7";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-(--background)"
    >
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-(--gold-deep)"
          >
            Vamos Conversar?
          </motion.span>

          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-4 mb-4 font-display text-3xl md:text-4xl lg:text-5xl text-(--foreground)"
          >
            Vamos analisar
            <br className="hidden md:block" />
            <span className="md:inline"> o seu caso?</span>
          </motion.h2>

          <motion.div
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hairline mt-8 mx-auto w-32"
          ></motion.div>

          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-8 text-lg md:text-xl text-(--muted-foreground) max-w-2xl mx-auto leading-relaxed"
          >
            Uma orientação previdenciária adequada pode fazer toda a diferença
            na conquista dos seus direitos e na segurança do seu futuro.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 rounded-full bg-(--primary) px-7 py-3 text-white font-medium tracking-wide transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(153,114,56,0.25)]"
            >
              <span>Falar no WhatsApp</span>

              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shrink-0 transition-transform duration-500 group-hover:translate-x-1">
                <FaWhatsapp
                  size={22}
                  className="absolute text-(--primary) transition-all duration-500 ease-in-out group-hover:translate-x-[40px]"
                />

                <FaWhatsapp
                  size={22}
                  className="absolute text-(--primary) -translate-x-[40px] transition-all duration-500 ease-in-out group-hover:translate-x-0"
                />
              </span>
            </a>
          </motion.div>
        </div>

        {/* CARD ADVOGADA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 mb-5 max-w-4xl mx-auto rounded-[40px] border border-(--gold-deep)/15 bg-white p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* FOTO */}
            <div className="shrink-0">
              <img
                src={VeronicaImage}
                alt="Advogada"
                className="w-52 h-52 object-cover rounded-full border-4 border-(--gold-soft)"
              />
            </div>

            {/* TEXTO */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-3xl text-(--foreground)">
                Vanessa Ferraz
              </h3>

              <p className="mt-2 text-(--gold-deep) tracking-wide uppercase text-sm">
                Advogada Previdenciária
              </p>

              <p className="mt-6 text-(--muted-foreground) leading-relaxed">
                Atendimento jurídico voltado à proteção dos direitos
                previdenciários, com acompanhamento personalizado, clareza nas
                orientações e comprometimento em cada etapa do processo.
              </p>

              {/* CONTATOS */}
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center md:items-start group transition-all duration-300 hover:-translate-y-1"
                >
                  <FaWhatsapp className="w-5 h-5 text-(--gold-deep) group-hover:scale-110 transition-transform" />

                  <p className="mt-2 text-sm group-hover:text-(--gold-deep)">
                    (45) 99999-9999
                  </p>
                </a>

                <a
                  href="mailto:advogada.adv@gmail.com"
                  className="flex flex-col items-center md:items-start group transition-all duration-300 hover:-translate-y-1 break-all"
                >
                  <Mail className="w-5 h-5 text-(--gold-deep) group-hover:scale-110 transition-transform" />

                  <p className="mt-2 text-sm group-hover:text-(--gold-deep)">
                    advogada.adv@gmail.com
                  </p>
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left group transition-all duration-300 hover:-translate-y-1"
                >
                  <MapPin className="w-5 h-5 text-(--gold-deep) group-hover:scale-110 transition-transform" />
                  <p className="mt-2 text-sm group-hover:text-(--gold-deep)">
                    Av. Brasil, 1000 - Centro - Foz do Iguaçu
                    - PR
                  </p>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
