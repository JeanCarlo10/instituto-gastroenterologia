import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import logoImage from "@/assets/IGC_LOGO.avif";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const navItems = [
  { label: "Início", id: "home" },
  { label: "Procedimentos", id: "procedures" },
  { label: "Sobre", id: "about" },
  { label: "Profissionais", id: "team" },
  { label: "Contato", id: "contact" },
];

const WHATSAPP_LINK =
  "https://wa.me/45999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta";

export default function Header() {
  const isMobile = useIsMobile();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
        ticking = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);

      if (!element) return;

      const headerOffset = isMobile ? 95 : 90;

      const y =
        element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    },
    [isMobile],
  );

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 140) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: "blur(4px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
      },
    },
  };

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        h-28
        transition-all
        duration-500
        ease-out
        ${
          isScrolled
            ? `
                bg-(--background)            
              `
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto h-full px-6 md:px-8">
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex h-full items-center justify-between"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <img
              src={logoImage}
              alt="Logo clínica"
              loading="eager"
              decoding="async"
              className="h-auto w-[120px]"
            />
          </a>

          {!isMobile && (
            <LayoutGroup>
              <nav className=" hidden lg:flex items-center gap-2 rounded-full bg-white/35 border border-white/30 backdrop-blur-xl p-2 ">
                {navItems.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className=" relative px-6 py-3 cursor-pointer select-none "
                    >
                      {active && (
                        <motion.div
                          layoutId="activeNavigation"
                          transition={{
                            type: "spring",
                            stiffness: 360,
                            damping: 32,
                          }}
                          className=" absolute inset-0 overflow-hidden rounded-full bg-gradient-to-r from-[#0DB26B]/12 to-[#0DB26B]/20 border border-[#0DB26B]/30 shadow-[0_10px_35px_rgba(13,178,107,.12)] backdrop-blur-xl"
                        />
                      )}
                      <motion.span
                        animate={{
                          color: active ? "#083B35" : "#34675D",
                        }}
                        transition={{ duration: 0.35 }}
                        className=" relative z-10 text-[13px] font-medium uppercase tracking-[0.22em] "
                      >
                        {item.label}
                      </motion.span>
                    </motion.a>
                  );
                })}
              </nav>
            </LayoutGroup>
          )}

          {/* {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Abrir menu"
            >
              <div className="flex h-12 w-12 items-center justify-end">
                <div className="flex flex-col gap-2 cursor-pointer">
                  <motion.div className="h-[1.5px] w-8 bg-[#0B8F57]" />
                  <motion.div className="h-[1.5px] w-6 bg-[#0B8F57]" />
                  <motion.div className="h-[1.5px] w-8 bg-[#0B8F57]" />
                </div>
              </div>
            </button>
          )} */}
          {isMobile && (
            <motion.button
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
      group

      flex
      items-center
      gap-3

      rounded-full

      border
      border-white/60

      bg-white/55

      px-5
      py-3

      backdrop-blur-2xl

      shadow-[0_12px_35px_rgba(0,0,0,.08)]
    "
            >
              {/* Texto */}

              <motion.span
                animate={{
                  letterSpacing: isMobileMenuOpen ? "0.22em" : "0.18em",
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
        text-[13px]

        font-semibold

        uppercase

        text-[#0B8F57]
      "
              >
                {isMobileMenuOpen ? "Fechar" : "Menu"}
              </motion.span>

              {/* Divisor */}

              <span
                className="
        h-5
        w-px

        bg-[#0DB26B]/20
      "
              />

              {/* Ícone */}

              <motion.div
                animate={{
                  rotate: isMobileMenuOpen ? 180 : 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
        relative

        flex

        h-5
        w-5

        items-center
        justify-center
      "
              >
                <motion.div
                  animate={
                    isMobileMenuOpen
                      ? {
                          rotate: 45,
                        }
                      : {
                          rotate: 0,
                        }
                  }
                  className="
          absolute

          h-[2px]
          w-4

          rounded-full

          bg-[#0B8F57]
        "
                />

                <motion.div
                  animate={
                    isMobileMenuOpen
                      ? {
                          rotate: -45,
                        }
                      : {
                          rotate: 90,
                        }
                  }
                  className="
          absolute

          h-[2px]
          w-4

          rounded-full

          bg-[#0B8F57]
        "
                />
              </motion.div>
            </motion.button>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-[999] bg-[#062A26]/30 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            {/* <motion.nav
              aria-label="Menu móvel"
              className="fixed inset-0 z-[1000] flex h-dvh w-full flex-col bg-white px-8 pt-24 pb-8"
              initial={{
                y: "-100%",
                scale: 0.98,
              }}
              animate={{
                y: 0,
                scale: 1,
              }}
              exit={{
                y: "-100%",
                scale: 0.98,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            > */}
            <motion.nav
            
              aria-label="Menu móvel"
              initial={{
                opacity: 0,
                y: -40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -40,
                scale: 0.96,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
    fixed

    left-5
    right-5
    top-24
    bottom-5

    z-[1000]

    overflow-hidden

    rounded-[34px]

    border
    border-white/40

    bg-white/75

    backdrop-blur-3xl

    shadow-[0_40px_90px_rgba(0,0,0,.12)]
  "
            >
              
              {/* Botão fechar */}
              {/* <button
                aria-label="Fechar menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 cursor-pointer text-(--primary) transition-all duration-300 hover:rotate-90 hover:scale-110"
              >
                <X size={28} />
              </button> */}
              <motion.button
                whileHover={{
                  rotate: 90,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                aria-label="Fechar menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
        absolute

        right-6
        top-6

        flex

        h-11
        w-11

        items-center
        justify-center

        rounded-full

        bg-[#F4FAF8]

        text-[#0B8F57]

        shadow-sm
    "
              ></motion.button>

              {/* Navegação */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex
h-full
flex-col
justify-between
px-8
pt-20
pb-8"
              >
                <div>
                  {navItems.map((item) => {
                    const active = activeSection === item.id;

                    return (
                      <motion.a
                        variants={itemVariants}
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        className={`
group

flex

items-center
justify-between

rounded-[22px]
border

border-transparent

hover:border-[#DDF4EA]

hover:shadow-[0_15px_35px_rgba(13,178,107,.08)]
px-5
py-5

transition-all
duration-300

${
  active
    ? "bg-[#F4FBF8] text-[#0B8F57]"
    : "hover:bg-[#F8FCFA] text-(--foreground)"
}
`}
                        // className={`group flex items-center justify-between border-b border-(--primary-light) py-6 text-[2rem] font-light transition-all duration-300 ${
                        //   active
                        //     ? "text-(--primary)"
                        //     : "text-(--foreground) hover:text-(--primary-dark)"
                        // }`}
                      >
                        <div className="flex items-center gap-5">
                          <span className="transition-transform duration-300 group-hover:translate-x-3">
                            {item.label}
                          </span>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="pt-10">
                  <Button
                    asChild
                    className="
    h-[68px]

    rounded-[22px]

    bg-[#083B35]

    text-white

    text-base

    font-semibold

    shadow-[0_20px_45px_rgba(13,178,107,.18)]

    transition-all
    duration-500

    hover:-translate-y-1

    hover:bg-[#0B4C43]

    hover:shadow-[0_30px_55px_rgba(13,178,107,.22)]
  
"
                    // className="h-14 w-full cursor-pointer rounded-lg bg-(--primary) text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_12px_30px_rgba(13,178,107,0.25)]"
                  >
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agendar consulta
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
