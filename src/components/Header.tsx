import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import logoImage from "@/assets/IGC_LOGO.avif";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { X } from "lucide-react";

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
                  letterSpacing: "0.18em",
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
                Menu
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
                whileHover={{
                  rotate: 90,
                }}
                transition={{
                  duration: 0.3,
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
                  animate={{
  rotate: 0,
}}
                  className="
          absolute

          h-[2px]
          w-4

          rounded-full

          bg-[#0B8F57]
        "
                />

                <motion.div
                  animate={{
  rotate: 90,
}}
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
              className="fixed inset-0 z-[999] bg-[#062A26]/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

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

top-5

bottom-5

z-[1000]

flex
flex-col

overflow-hidden

rounded-[34px]

border
border-white/50

bg-white/82

backdrop-blur-[28px]

shadow-[0_35px_80px_rgba(0,0,0,.12)]
"
            >
              <div
                className="
    flex
    items-center
    justify-between

    border-b

    border-[#E8F4EF]

    px-8

    py-7
  "
              >
                <div className="flex items-center gap-4">
                  <h2
                    className="
          mt-1

          text-xl

          font-semibold

          text-[#083B35]
        "
                  >
                    Navegação
                  </h2>
                </div>

                <motion.button
                  whileHover={{
                    rotate: 90,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
        flex
      cursor-pointer
        h-11
        w-11

        items-center
        justify-center

        rounded-full

        bg-[#F5FAF8]

        text-[#0B8F57]
      "
                >
                  <X size={22} />
                </motion.button>
              </div>

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

rounded-2xl
border

border-transparent

hover:border-[#DDF4EA]

hover:shadow-[0_15px_35px_rgba(13,178,107,.08)]
px-5
py-4

transition-all
duration-300

${
  active
    ? "bg-[#F7FCFA] text-[#0B8F57]"
    : "hover:bg-[#F8FCFA] text-(--gray-dark)"
}
`}
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
