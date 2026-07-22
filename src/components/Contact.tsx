import { motion } from "framer-motion";
import { SlideUp } from "@/animations";
import { Phone, MapPin, ChevronsRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "5545999999999";

const WHATSAPP_TEXT = "Olá! Gostaria de agendar uma consulta.";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`;

const PHONE = "(45) 3572-0404";

const MAPS_LINK = "https://maps.app.goo.gl/mR8TCxKgvDaCf3Kh7";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FCFCFB] py-28"
    >
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-[38%_62%]">
          <div className="max-w-3xl">
            <motion.span
              variants={SlideUp(0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="uppercase tracking-[0.35em] text-sm text-(--gray-dark)"
            >
              Contato
            </motion.span>

            <motion.div
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="hairline mt-7 w-24"
            />

            <motion.h2
              variants={SlideUp(0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-8 text-4xl font-bold leading-[1.08] text-(--gray-medium) md:text-5xl lg:text-6xl"
            >
              Estamos aqui
              <br />
              para cuidar de você.
            </motion.h2>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-8 mb-12 max-w-xl text-xl text-(--gray-dark)"
            >
              Entre em contato conosco e nossa equipe <br /> terá o prazer em
              atender você.
            </motion.p>

            <motion.div
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-5"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group
                flex
                items-center
                gap-5
                border-b
                border-(--border)
                pb-6
              "
              >
                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-(--primary)/12
                "
                >
                  <FaWhatsapp size={28} className="text-(--primary)" />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-(--gray-dark)">WhatsApp</p>

                  <p className="mt-1 text-xl font-semibold text-(--gray-medium)">
                    (45) 99999-9999
                  </p>

                  {/* BOTÃO CTA */}

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mt-6 flex h-[65px] items-center rounded-full bg-(--primary-dark-medium) p-[5px] 
                    overflow-hidden 
                    transition-all 
                    duration-500 
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    hover:shadow-[0_20px_50px_rgba(13,178,107,.20)]
                    active:scale-[0.98]"
                  >
                    <span
                      className="relative z-10 flex flex-1 h-full items-center justify-center rounded-full bg-[#083B35]
                      text-(--primary-lighter)
                      text-[22px]
                      font-semibold
                      tracking-[-0.02em]
                      transition-all
                      duration-500"
                    >
                      Agendar consulta
                    </span>

                    <span className="relative z-10 ml-1 flex h-full w-[82px] items-center justify-center rounded-full transition-all duration-500 group-hover:w-[95px]">
                      <motion.div
                        animate={{
                          x: [0, 4, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.8,
                          ease: "easeInOut",
                        }}
                        className="group-hover:animate-none"
                      >
                        <ChevronsRight
                          size={30}
                          strokeWidth={2.5}
                          className="text-(--primary-lighter) transition-all duration-500 group-hover:translate-x-2"
                        />
                      </motion.div>
                    </span>
                  </a>
                </div>
              </a>

              {/* Telefone */}

              <a
                href={`tel:${PHONE}`}
                className="
                group
                flex
                items-center
                gap-5
                border-b
                border-(--border)
                pb-6
              "
              >
                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-(--primary)/12
                "
                >
                  <Phone size={24} className="text-(--primary)" />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-(--gray-dark)">Telefone</p>

                  <p className="mt-1 text-xl font-semibold text-(--gray-medium)">
                    (45) 3572-0404
                  </p>
                </div>
              </a>

              {/* Endereço */}

              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group
                flex
                items-center
                gap-5
                border-b
                border-(--border)
                pb-6
                cursor-pointer
              "
              >
                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-(--primary)/12
                "
                >
                  <MapPin size={24} className="text-(--primary)" />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-(--gray-dark)">Endereço</p>

                  <p className="mt-1 text-xl font-semibold text-(--gray-medium) ">
                    R. Mal. Floriano Peixoto, 735
                    <br />
                    Centro • Foz do Iguaçu - PR
                  </p>
                </div>
              </a>

              
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* COLUNA DIREITA */}
          {/* ================================================= */}

          <motion.div
            variants={SlideUp(0.35)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="
                relative
                h-[745px]
                overflow-hidden
                rounded-[42px]
                border
                border-[#EEF2F0]
                bg-white
                shadow-[0_35px_80px_rgba(0,0,0,.08)]
              "
            >
              <iframe
                title="Mapa Clínica IGC"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.7146320027036!2d-54.58425049999999!3d-25.547880900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f691b4570f77ed%3A0x48cdbb147b7788df!2sInstituto%20de%20Gastroenterologia%20e%20Cirurgia!5e0!3m2!1spt-BR!2sbr!4v1784741564937!5m2!1spt-BR!2sbr"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
