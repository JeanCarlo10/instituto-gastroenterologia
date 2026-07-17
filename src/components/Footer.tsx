import { Facebook, Instagram, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp } from "@/animations";

const Footer = () => {
  return (
    <footer
      className="relative
    pt-28
    pb-10
    bg-gradient-to-b
    from-(--primary)
    via-[#a57b3d]
    to-[#8d682f]"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative flex items-center justify-center w-58 h-58">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-(--gold-deep)/20 blur-3xl" />

          {/* Texto circular */}
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]"
          >
            <defs>
              <path
                id="footer-circle"
                d="
            M100,100
            m-75,0
            a75,75 0 1,1 150,0
            a75,75 0 1,1 -150,0
          "
              />
            </defs>

            <text
              fill="var(--gold-soft)"
              fontSize="10"
              letterSpacing="3"
              fontWeight="500"
            >
              <textPath href="#footer-circle" startOffset="0%">
                ✦ VANESSA FERRAZ ✦ ADVOCACIA PREVIDENCIÁRIA ✦
              </textPath>
            </text>
          </svg>

          {/* Centro */}
          <div
            className="
         w-34
    h-34
    rounded-full
    bg-[#9b7538]
    shadow-[0_0_80px_rgba(224,207,176,0.18)]
    flex
    items-center
    justify-center
      "
          >
            <Scale size={58} strokeWidth={1.4} color="var(--muted)" />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-8">
        {/* Linha */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-(--gold-deep)/50 to-transparent" />

        <div className="max-w-4xl mx-auto text-center">
          {/* Nome */}
          <motion.h3
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-8 font-display text-4xl md:text-5xl text-white"
          >
            Vanessa Ferraz
          </motion.h3>

          {/* Cargo */}
          <motion.p
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-3 uppercase tracking-[0.35em] text-xs text-(--gold-soft)"
          >
            Advocacia Previdenciária
          </motion.p>

          {/* Menu */}
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-8 "
          >
            <a
              href="#home"
              className="text-(--gold-soft) transition-all duration-300 hover:text-white hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(224,207,176,0.3)]"
            >
              Início
            </a>

            <a
              href="#areas"
              className="text-(--gold-soft) transition-all duration-300 hover:text-white hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(224,207,176,0.3)]"
            >
              Áreas de Atuação
            </a>

            <a
              href="#about"
              className="text-(--gold-soft) transition-all duration-300 hover:text-white hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(224,207,176,0.3)]"
            >
              Sobre
            </a>

            <a
              href="#contact"
              className="text-(--gold-soft) transition-all duration-300 hover:text-white hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(224,207,176,0.3)]"
            >
              Contato
            </a>
          </motion.div>

          {/* Redes */}
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 flex justify-center gap-4"
          >
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-12
                h-12
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                text-white/70
                hover:bg-(--gold-deep)
                hover:border-(--gold-deep)
                hover:text-white
                transition-all
                duration-300
              "
            >
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-12
                h-12
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                text-white/70
                hover:bg-(--gold-deep)
                hover:border-(--gold-deep)
                hover:text-white
                transition-all
                duration-300
              "
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          {/* Rodapé */}
          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Vanessa Ferraz. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
