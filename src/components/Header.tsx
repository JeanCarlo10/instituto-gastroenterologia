import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import logoImage from "@/assets/IGC LOGO.avif";
import { motion, AnimatePresence } from "framer-motion";

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
        setIsScrolled(window.scrollY > 40);
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
              className="h-auto w-[220px] md:w-[280px] lg:w-[135px]"
            />
          </a>

          {!isMobile && (
            <nav className="flex items-center gap-12">
              {navItems.map((item) => {
                const active = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`
                      group
                      relative
                      text-sm
                      font-medium
                      tracking-[0.20em]
                      uppercase
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      ${
                        active
                          ? "text-(--gray-medium)"
                          : "text-(--primary-dark)"
                      }
                    `}
                  >
                    {item.label}

                    <span
                      className={`
                        absolute
                        -bottom-2
                        left-1/2
                        h-px
                        -translate-x-1/2
                        bg-(--gray-medium)
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${active ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </a>
                );
              })}
            </nav>
          )}

          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Abrir menu"
            >
              <div className="flex h-12 w-12 items-center justify-end">
                <div className="flex flex-col gap-2 cursor-pointer">
                  <motion.div className="h-[1.5px] w-8 bg-(--primary)" />
                  <motion.div className="h-[1.5px] w-6 bg-(--primary)" />
                  <motion.div className="h-[1.5px] w-8 bg-(--primary)" />
                </div>
              </div>
            </button>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-[999] bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.nav
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
            >
              {/* Botão fechar */}
              <button
                aria-label="Fechar menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 cursor-pointer text-(--primary) transition-all duration-300 hover:rotate-90 hover:scale-110"
              >
                <X size={28} />
              </button>

              {/* Navegação */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-1 flex-col justify-between"
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
                        className={`group flex items-center justify-between border-b border-(--primary-light) py-6 text-[2rem] font-light transition-all duration-300 ${
                          active
                            ? "text-(--primary)"
                            : "text-(--foreground) hover:text-(--primary-dark)"
                        }`}
                      >
                        <span className="transition-transform duration-300 group-hover:translate-x-3">
                          {item.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="pt-10">
                  <Button
                    asChild
                    className="h-14 w-full cursor-pointer rounded-lg bg-(--primary) text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_12px_30px_rgba(13,178,107,0.25)]"
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
