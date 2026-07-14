// import { motion } from "framer-motion";
// import HeroImage from "@/assets/Hero4.png";
// import { ArrowRight } from "lucide-react";

// const WHATSAPP_NUMBER = "45999999999";

// const WHATSAPP_TEXT =
//   "Olá! Gostaria de receber orientação sobre meu caso previdenciário.";

// const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//   WHATSAPP_TEXT,
// )}`;

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative w-full overflow-hidden bg-(--background)"
//     >

//       <div className="relative z-10 container mx-auto px-6 lg:px-8 min-h-screen flex items-center">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center w-full py-24 lg:py-20">
//           <div className="lg:col-span-7 text-center lg:text-left">
//             <motion.h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-7xl leading-[1.02] max-w-4xl text-(--foreground)">
//               Cuidado que transforma
//               <br />
//               <span className="text-(--primary)">sua saúde digestiva</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.38, ease: "easeOut" }}
//               className="mt-8 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-(--muted-foreground)"
//             >
//               Diagnóstico preciso, tratamento humanizado e tecnologia avançada
//               para cuide você em todas as fases da vida.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 22 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.75, delay: 0.52, ease: "easeOut" }}
//               className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
//             >
//               <a
//                 href={WHATSAPP_LINK}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group w-[320px] h-[64px] inline-flex items-center justify-between rounded-full bg-(--primary) px-7 text-white font-medium transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(13,178,107,0.25)]"
//               >
//                 <span className="text-lg">Agendar consulta</span>

//                 <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shrink-0">
//                   <ArrowRight
//                     size={24}
//                     className="absolute text-(--primary) transition-all duration-500 ease-in-out group-hover:translate-x-[50px]"
//                   />

//                   <ArrowRight
//                     size={24}
//                     className="absolute text-(--primary) -translate-x-[50px] transition-all duration-500 ease-in-out group-hover:translate-x-0"
//                   />
//                 </span>
//               </a>

//               <a
//                 href="#areas"
//                 className="w-[320px] h-[64px] inline-flex items-center justify-center rounded-full border border-(--primary) text-(--foreground) text-lg font-medium transition-all duration-300 hover:bg-(--primary)/10 hover:-translate-y-1"
//               >
//                 Conhecer áreas de atuação
//               </a>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, x: 46, scale: 0.96 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 0.95, delay: 0.35, ease: "easeOut" }}
//             className="lg:col-span-5"
//           >
//             <div className="relative mx-auto max-w-md lg:max-w-lg">
//               <div className="relative rounded-[1.75rem] overflow-hidden shadow-elevated bg-(--muted)">
//                 <img
//                   src={HeroImage}
//                   alt="Foto"
//                   width={896}
//                   height={1152}
//                   className="w-full h-full object-cover aspect-[4/5]"
//                   loading="eager"
//                   decoding="async"
//                   fetchPriority="high"
//                 />

//                 {/* <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[1.75rem] pointer-events-none" /> */}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Microscope,
  Award,
  CheckCircle2,
} from "lucide-react";

import HeroImage from "@/assets/NovaHero2.png";

const WHATSAPP_NUMBER = "45999999999";

const WHATSAPP_TEXT = "Olá! Gostaria de agendar uma consulta";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`;

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] right-[-150px] w-[650px] h-[650px] rounded-full bg-(--primary)/10 blur-[140px]" />

        <div className="absolute bottom-[-250px] left-[-200px] w-[550px] h-[550px] rounded-full bg-(--primary)/5 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#0db26b 1px,transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="min-h-screen flex items-center py-24">
          <div className="grid lg:grid-cols-12 gap-20 items-center w-full">
            {/* LEFT */}

            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                }}
                className="inline-flex items-center gap-2 rounded-full border border-(--primary)/20 bg-(--primary)/5 px-5 py-2"
              >
                <Award size={18} className="text-(--primary)" />

                <span className="text-sm font-medium text-(--foreground)">
                  Referência em Gastroenterologia desde 2004
                </span>
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.8,
                }}
                className="mt-8 text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-[-2px]"
              >
                Especialistas em
                <br />
                <span className="text-(--primary)">Gastroenterologia</span>
                <br />e Cirurgia Digestiva
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                }}
                className="mt-8 text-lg leading-9 text-(--muted-foreground) max-w-xl"
              >
                Há mais de 20 anos oferecendo diagnóstico preciso, tecnologia
                avançada e atendimento humanizado para o tratamento completo das
                doenças do aparelho digestivo.
              </motion.p>

              {/* Diferenciais */}

              {/* <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.8,
                }}
                className="mt-10 grid grid-cols-2 gap-5"
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-(--primary)/10 flex items-center justify-center">
                    <HeartHandshake size={22} className="text-(--primary)" />
                  </div>

                  <div>
                    <p className="font-semibold">Atendimento</p>

                    <p className="text-sm text-(--muted-foreground)">
                      Humanizado
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-(--primary)/10 flex items-center justify-center">
                    <Microscope size={22} className="text-(--primary)" />
                  </div>

                  <div>
                    <p className="font-semibold">Tecnologia</p>

                    <p className="text-sm text-(--muted-foreground)">
                      Equipamentos modernos
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-(--primary)/10 flex items-center justify-center">
                    <ShieldCheck size={22} className="text-(--primary)" />
                  </div>

                  <div>
                    <p className="font-semibold">Diagnóstico</p>

                    <p className="text-sm text-(--muted-foreground)">
                      Seguro e preciso
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-(--primary)/10 flex items-center justify-center">
                    <CheckCircle2 size={22} className="text-(--primary)" />
                  </div>

                  <div>
                    <p className="font-semibold">Equipe Médica</p>

                    <p className="text-sm text-(--muted-foreground)">
                      Especializada
                    </p>
                  </div>
                </div>
              </motion.div> */}

              {/* BOTÕES */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                }}
                className="mt-12 flex flex-col sm:flex-row gap-5"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between h-16 w-[310px] rounded-full bg-(--primary) px-8 text-white font-semibold shadow-lg shadow-(--primary)/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-(--primary)/30"
                >
                  <span>Agendar consulta</span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                    <ArrowRight
                      size={22}
                      className="text-(--primary) transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>

                <a
                  href="#areas"
                  className="inline-flex h-16 w-[310px] items-center justify-center rounded-full border border-(--primary)/30 bg-white text-(--foreground) font-semibold transition-all duration-300 hover:border-(--primary) hover:bg-(--primary)/5 hover:-translate-y-1"
                >
                  Conhecer especialidades
                </a>
              </motion.div>
            </div>

            {/* RIGHT */}

            <div
              
              className="lg:col-span-6 "
              // className="lg:col-span-6"
            >
              {/* <div className="relative flex justify-center"> */}
              <div className="absolute inset-y-0 right-0 w-[58vw] overflow-hidden">
                {/* Glow */}

                <div className="absolute w-[620px] h-[620px] rounded-full bg-(--primary)/15 blur-[130px]" />

                {/* Glow secundário */}

                <div className="absolute top-24 right-12 w-[250px] h-[250px] rounded-full bg-(--primary)/20 blur-[90px]" />

                {/* Card principal */}

                <div
                  
                  // className="relative rounded-[38px] overflow-hidden bg-white shadow-[0_40px_90px_rgba(0,0,0,.10)] ring-1 ring-(--primary)/10"
                  className="absolute inset-0"
                >
                  <img
                    src={HeroImage}
                    alt="Clínica IGC"
                    className="absolute inset-0 h-full w-full object-cover object-left scale-110 blur-[1px]"
                    // className="w-full max-w-[560px] object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />

                  {/* brilho */}
                  <div
    className="
    absolute
    inset-0
    bg-gradient-to-r
    from-white
    via-white/35
    to-transparent
"
/>

                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 pointer-events-none" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
