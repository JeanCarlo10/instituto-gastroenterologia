import { motion } from "framer-motion";
import { Award, ChevronsRight } from "lucide-react";
import HeroVideo from "@/assets/Video_Hero.mp4";

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
      {/* VIDEO */}
      {/* ================================================= */}

      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        object-right
        pointer-events-none
        scale-[1.02]
      "
        animate={{
          scale: [1.02, 1.06, 1.02],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <source src={HeroVideo} type="video/mp4" />
      </motion.video>

      {/* ================================================= */}
      {/* OVERLAY */}
      {/* ================================================= */}

      <div className="absolute inset-0">
        {/* branco */}

        <div
          className="
          absolute
          inset-0

          bg-gradient-to-r

          from-white

          via-white/82

          via-[34%]

          to-white/5

          lg:to-transparent
        "
        />

        {/* vinheta */}

        <div
          className="
          absolute
          inset-0

          bg-gradient-to-t

          from-white/5

          via-transparent

          to-transparent
        "
        />

        {/* glow */}

        <div
          className="
          absolute

          -left-56

          top-1/2

          h-[720px]

          w-[720px]

          -translate-y-1/2

          rounded-full

          bg-(--primary)/10

          blur-[180px]
        "
        />

        {/* glow superior */}

        <div
          className="
          absolute

          right-20

          top-16

          h-[280px]

          w-[280px]

          rounded-full

          bg-(--primary)/15

          blur-[120px]
        "
        />

        {/* textura */}

        <div
          className="absolute inset-0 opacity-[0.035]"
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

      <div
        className="
        relative
        z-20

        container

        mx-auto

        flex

        min-h-screen

        items-center

        px-6

        pt-36

        pb-24

        lg:px-8
      "
      >
        <div className="w-full max-w-[760px]">
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-(--primary)/20
              bg-white/70
              px-5
              py-2
              backdrop-blur-xl
            "
          >
            <Award size={18} className="text-(--primary)" />

            <span className="text-sm font-medium text-(--foreground)">
              Referência em Gastroenterologia desde 2004
            </span>
          </motion.div>

          {/* ================================================= */}

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
            className="
              mt-8

              text-[46px]

              font-bold

              leading-[0.98]

              tracking-[-0.05em]

              text-(--foreground)

              sm:text-[62px]

              lg:text-[82px]
            "
          >
            Especialistas em
            <span className="mt-2 block text-(--primary)">
              Gastroenterologia
            </span>
            <span className="mt-2 block">e Cirurgia Digestiva</span>
          </motion.h1>

          {/* ================================================= */}

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
            className="
              mt-10

              max-w-[640px]

              text-lg

              leading-9

              text-(--muted-foreground)

              lg:text-xl
            "
          >
            Há mais de 20 anos oferecendo diagnóstico preciso, tecnologia
            avançada e atendimento humanizado para o tratamento completo das
            doenças do aparelho digestivo.
          </motion.p>

          {/* ================================================= */}

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
            className="
              mt-14

              flex

              flex-col

              gap-5

              sm:flex-row
            "
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group

                relative

                flex

                h-[72px]

                w-full

                max-w-[360px]

                items-center

                overflow-hidden

                rounded-full

                bg-(--primary-dark-medium)

                p-[5px]

                transition-[background-color,border-color,box-shadow,transform]

                duration-[450ms]

                ease-[cubic-bezier(0.22,1,0.36,1)]

                hover:-translate-y-1

                hover:shadow-[0_25px_60px_rgba(13,178,107,.20)]
              "
            >
              <span
                className="
                  flex

                  h-full

                  flex-1

                  items-center

                  justify-center

                  rounded-full

                  bg-[#083B35]

                  text-[22px]

                  font-semibold

                  text-(--primary-lighter)
                "
              >
                Agendar consulta
              </span>

              <span
                className="
                  ml-1

                  flex

                  h-full

                  w-[82px]

                  items-center

                  justify-center

                  transition-all

                  duration-500

                  group-hover:w-[95px]
                "
              >
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
                    className="
                      text-(--primary-lighter)

                      transition-transform

                      duration-500

                      group-hover:translate-x-2
                    "
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
