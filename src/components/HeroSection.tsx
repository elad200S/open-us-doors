import { motion } from "framer-motion";
import USAFlag from "./USAFlag";

const ease = [0.16, 1, 0.3, 1];

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-navy relative overflow-hidden flex items-center">
      {/* Subtle star pattern background */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--navy-foreground)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-6"
            >
              הזדמנויות עבודה בארה״ב
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="text-navy-foreground text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-balance"
            >
              פתחת את הדלת.
              <br />
              עכשיו תיכנס לאמריקה.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
              className="text-navy-foreground/60 mt-6 text-base md:text-lg max-w-md leading-relaxed"
            >
              עבודות סרוויס בארה״ב לצעירים אחרי צבא — עם ליווי מלא מהרגע הראשון
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease }}
              onClick={scrollToForm}
              className="mt-8 bg-usa-red text-usa-red-foreground font-bold text-base px-10 py-4 rounded-lg transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              אני רוצה לשמוע עוד ›
            </motion.button>
          </div>

          {/* Flag side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="w-full max-w-sm md:max-w-md">
              <USAFlag />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
