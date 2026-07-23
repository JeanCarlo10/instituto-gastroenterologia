import { motion } from "framer-motion";
import { SlideUp } from "@/animations";
import logoImage from "@/assets/Teste.png";

import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  Facebook,
  Instagram,
} from "lucide-react";

const PHONE_NUMBER = "(45)3572-0404";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#00534a] pt-16 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0DB26B]/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[380px]
            w-[380px]
            rounded-full
            bg-white/5
            blur-[140px]
          "
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="grid gap-20 xl:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* ================================================= */}
          {/* COLUNA 1 */}
          {/* ================================================= */}

          <motion.div
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <a href="#home" className="cursor-pointer">
              <img
                src={logoImage}
                alt="Logo clínica IGC"
                loading="eager"
                decoding="async"
                className="h-auto w-[70px]"
              />
            </a>

            <p className="mt-8 max-w-md text-lg leading-8 text-white/70">
              Atendimento especializado em gastroenterologia, cirurgia,
              endoscopia digestiva e diagnóstico avançado, oferecendo cuidado
              humanizado e excelência médica.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* COLUNA 2 */}
          {/* ================================================= */}

          <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold">Navegação</span>

            <nav className="mt-8 space-y-5">
              {[
                ["Início", "#home"],
                ["Procedimentos", "#procedures"],
                ["Sobre a clínica", "#about"],
                ["Profissionais", "#team"],
                ["Contato", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="
                    block
                    text-white/70
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* ================================================= */}
          {/* COLUNA 3 */}
          {/* ================================================= */}

          <motion.div
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold">Contato</span>

            <div className="mt-8 space-y-7">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="group flex items-start gap-4"
              >
                <Phone size={18} className="mt-1 text-[#7BD6A9]" />

                <div>
                  <p className="text-sm text-white/50">Telefone</p>

                  <p className="mt-1 text-white/75 transition group-hover:text-white">
                    (45) 3572-0404
                  </p>
                </div>
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <MapPin size={18} className="mt-1 text-[#7BD6A9]" />

                <div>
                  <p className="text-sm text-white/50">Endereço</p>

                  <p className="mt-1 leading-7 text-white/75 transition group-hover:text-white">
                    R. Mal. Floriano Peixoto, 735
                    <br />
                    Centro • Foz do Iguaçu - PR
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* COLUNA 4 */}
          {/* ================================================= */}

          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold">Atendimento</span>

            <div className="mt-8 flex gap-4">
              <Clock3 size={18} className="mt-1 text-[#7BD6A9]" />

              <div>
                <p className="text-sm text-white/50">Horário</p>
                <p className="mt-1 leading-7 text-white/75 transition group-hover:text-white">
                  Segunda à Sexta: 08h00 às 18h00
                </p>

                {/* <p className="mt-1 text-white text-md">
                  Segunda à Sexta: 08h00 às 18h00
                </p> */}
              </div>
            </div>

            {/* Redes */}

            <div className="mt-12 flex gap-4">
              <a
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/70
                  transition-all
                  duration-300
                  hover:border-[#0DB26B]
                  hover:bg-[#0DB26B]
                  hover:text-white
                "
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/70
                  transition-all
                  duration-300
                  hover:border-[#0DB26B]
                  hover:bg-[#0DB26B]
                  hover:text-white
                "
              >
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* RODAPÉ */}
        {/* ================================================= */}

        <div className="mt-16 border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/45">
              © {new Date().getFullYear()} Instituto de Gastroenterologia e
              Cirurgia. Todos os direitos reservados.
            </p>

            <a
              href="#home"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                text-sm
                text-white/55
                transition
                hover:text-white
              "
            >
              Voltar ao topo
              <ArrowUpRight size={16} className="-rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
