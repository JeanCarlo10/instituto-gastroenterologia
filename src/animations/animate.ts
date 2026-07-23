import type { Variants } from "framer-motion";

/**
 * Curva utilizada em todas as animações
 * Deixa os movimentos mais suaves e premium
 */
export const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ===========================================================
   TITLES
=========================================================== */

export const RevealTitle = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    filter: "blur(10px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.9,
      delay,
      ease: premiumEase,
    },
  },
});

/* ===========================================================
   SUBTITLE
=========================================================== */

export const RevealSubtitle = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    y: 18,
  },

  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      delay,
      ease: premiumEase,
    },
  },
});

/* ===========================================================
   PARAGRAPHS
=========================================================== */

export const FadeText = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,

    transition: {
      duration: 0.9,
      delay,
      ease: premiumEase,
    },
  },
});

/* ===========================================================
   DIVIDER
=========================================================== */

export const RevealDivider = (delay = 0): Variants => ({
  initial: {
    width: 0,
    opacity: 0,
  },

  animate: {
    width: "8rem",
    opacity: 1,

    transition: {
      duration: 0.7,
      delay,
      ease: premiumEase,
    },
  },
});

/* ===========================================================
   IMAGE
=========================================================== */

export const RevealImage = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(12px)",
  },

  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 1,
      delay,
      ease: premiumEase,
    },
  },
});

/* ===========================================================
   CARD
=========================================================== */

export const RevealCard = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    scale: 0.97,
    y: 20,
    filter: "blur(8px)",
  },

  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.9,
      delay,
      ease: premiumEase,
    },
  },
});

/* ===========================================================
   STAGGER CONTAINER
=========================================================== */

export const StaggerContainer: Variants = {
  initial: {},

  animate: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0.18,
    },
  },
};

/* ===========================================================
   LIST ITEM
=========================================================== */

export const RevealItem: Variants = {
  initial: {
    opacity: 0,
    y: 18,
  },

  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: premiumEase,
    },
  },
};

/* ===========================================================
   ICON
=========================================================== */

export const FloatingIcon: Variants = {
  initial: {
    opacity: 0,
    scale: 0.7,
    rotate: -8,
  },

  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,

    transition: {
      duration: 0.7,
      ease: premiumEase,
    },
  },
};

/* ===========================================================
   BUTTON HOVER
=========================================================== */

export const ButtonHover = {
  whileHover: {
    y: -4,
    scale: 1.02,

    transition: {
      duration: 0.28,
      ease: premiumEase,
    },
  },

  whileTap: {
    scale: 0.98,
  },
};

/* ===========================================================
   CARD HOVER
=========================================================== */

export const CardHover = {
  whileHover: {
    y: -8,
    scale: 1.015,

    transition: {
      duration: 0.35,
      ease: premiumEase,
    },
  },

  whileTap: {
    scale: 0.99,
  },
};

/* ===========================================================
   IMAGE HOVER
=========================================================== */

export const ImageHover = {
  whileHover: {
    scale: 1.035,

    transition: {
      duration: 0.45,
      ease: premiumEase,
    },
  },
};

/* ===========================================================
   CTA GLOW
=========================================================== */

export const PulseGlow: Variants = {
  animate: {
    boxShadow: [
      "0 0 0 rgba(13,178,107,0)",
      "0 0 30px rgba(13,178,107,.18)",
      "0 0 0 rgba(13,178,107,0)",
    ],

    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ===========================================================
   FLOATING
=========================================================== */

export const Floating = {
  animate: {
    y: [0, -5, 0],

    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ===========================================================
   SECTION
=========================================================== */

export const SectionReveal: Variants = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,

    transition: {
      duration: 0.8,
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

/* ===========================================================
   SCALE IN
=========================================================== */

export const ScaleIn = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    scale: 0.9,
  },

  animate: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.65,
      delay,
      ease: premiumEase,
    },
  },
});

/* ===========================================================
   FADE
=========================================================== */

export const Fade = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,

    transition: {
      duration: 0.7,
      delay,
      ease: premiumEase,
    },
  },
});

/* ===========================================================
   LEFT
=========================================================== */

export const RevealLeft = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    x: -40,
  },

  animate: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      delay,
      ease: premiumEase,
    },
  },
});

/* ===========================================================
   RIGHT
=========================================================== */

export const RevealRight = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    x: 40,
  },

  animate: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      delay,
      ease: premiumEase,
    },
  },
});

export const SlideUp = (delay?: number) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};
