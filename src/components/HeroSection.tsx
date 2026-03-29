import { motion } from "framer-motion";
import logoImg from "@/assets/logo.png";
import USAFlag from "@/components/USAFlag";

const ease = [0.16, 1, 0.3, 1];

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-navy-dark relative overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--navy-dark-foreground)) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      {/* Flag behind content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12] pointer-events-none scale-150">
        <USAFlag />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mb-12"
          >
            <img src={logoImg} alt="Money Overseas" className="h-28 md:h-36 object-contain" />
          </motion.div>

          {/* Text content centered */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-8"
            >
              הזדמנויות עבודה בארה״ב 🇺🇸
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
              className="text-navy-dark-foreground font-black leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              תעבוד.
              <br />
              תרוויח.
              <br />
              <span className="relative inline-block">
                תתקדם.
                <span className="absolute bottom-0 right-0 w-full h-1 bg-usa-red rounded-full" />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease }}
              className="text-navy-dark-foreground/50 mt-8 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
            >
              עבודות שטח בתחומי הבית בארה״ב — Garage Door, Locksmith, Air Duct, Chimney ועוד. עם הכשרה מקצועית, לידים אמיתיים ואופציות קידום.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease }}
              onClick={scrollToForm}
              className="mt-10 bg-usa-red text-usa-red-foreground font-bold text-base px-10 py-4 rounded-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_20px_rgba(178,34,52,0.3)] hover:shadow-[0_0_30px_rgba(178,34,52,0.5)]"
            >
              רוצה לשמוע עוד? השאר פרטים ›
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4, ease }}
              className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-navy-dark-foreground/50 text-sm"
            >
              <span>✓ ללא עלות</span>
              <span>✓ ללא התחייבות</span>
              <span>✓ נציג יחזור תוך 24 שעות</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
