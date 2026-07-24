import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import HeroImage from "@/assets/HeroAtual.png";

const WHATSAPP_NUMBER = "45999999999";

const WHATSAPP_TEXT = "Olá! Gostaria de agendar uma consulta.";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`;

const Hero = () => {
  return (
    <section
      id="home"
      className="
      relative
      isolate
      min-h-screen
      overflow-hidden
      bg-white
    "
    >
      {/* ================================================= */}
      {/* HERO IMAGE */}
      {/* ================================================= */}

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={HeroImage}
          alt="Instituto de Gastroenterologia"
          loading="eager"
          fetchPriority="high"
          className=" absolute inset-0 h-full w-full object-cover object-[98%_center] lg:object-[90%_center] xl:object-[96%_center] 2xl:object-right pointer-events-none select-none"
        />
      </div>

      {/* ================================================= */}
      {/* BACKGROUND FX */}
      {/* ================================================= */}

      <div className="absolute inset-0">
        {/* White Gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/82 via-[36%] to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />

        {/* Soft radial */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-1/2 h-[720px] w-[720px] -translate-y-1/2 rounded-full bg-(--primary) opacity-20 blur-[170px]"
        />

        {/* Secondary Glow */}

        <motion.div
          animate={{
            opacity: [0.12, 0.22, 0.12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" absolute right-[8%] top-[12%] h-[260px] w-[260px] rounded-full bg-(--primary) blur-[120px] "
        />

        {/* Light */}

        <motion.div
          animate={{
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className=" absolute left-[-10%] top-[-25%] h-[600px] w-[700px] rotate-[-18deg] bg-gradient-to-b from-white/45 to-transparent blur-[90px] "
        />

        {/* Noise */}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#0db26b 1px,transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-20 container mx-auto flex min-h-screen items-center justify-center px-6 pt-32 pb-20 lg:justify-start lg:px-8 ">
        <div className=" w-full max-w-[760px] text-center md:text-left lg:text-left">
          <motion.h1
            initial={{
              opacity: 0,
              y: 26,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.9,
            }}
            className=" mt-8 text-[36px] font-bold leading-[0.98] tracking-[-0.05em] text-[#083B35] sm:text-[62px] lg:text-[82px] "
          >
            Especialistas em
            <span className="mt-2 block text-(--primary)">
              Gastroenterologia
            </span>
            <span className="mt-2 block">e Cirurgia Digestiva</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.9,
            }}
            className="mt-8 mx-auto max-w-[640px] text-lg leading-9 text-(--gray-dark) md:mx-0 lg:mx-0 lg:mt-10 lg:text-xl"
          >
            Há mais de 20 anos oferecendo diagnóstico preciso, tecnologia
            avançada e atendimento humanizado para o tratamento completo das
            doenças do aparelho digestivo.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: 0.8,
            }}
            className="mt-12 flex justify-center sm:justify-center md:justify-start lg:justify-start"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className=" group relative flex h-[72px] w-full max-w-[360px] items-center overflow-hidden rounded-full bg-(--primary-dark-medium) p-[5px] transition-[background-color,border-color,box-shadow,transform] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(13,178,107,.20)] "
            >
              <span className=" flex h-full flex-1 items-center justify-center rounded-full bg-[#083B35] text-[22px] font-semibold text-(--primary-lighter) ">
                Agendar consulta
              </span>

              <span className="ml-1 flex h-full w-[82px] items-center justify-center transition-all duration-500 group-hover:w-[95px] ">
                <motion.div
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.8,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronsRight
                    size={30}
                    strokeWidth={2.5}
                    className="text-(--primary-lighter) transition-transform duration-500 group-hover:translate-x-2"
                  />
                </motion.div>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
