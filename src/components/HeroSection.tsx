import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-8"
        >
          הזדמנויות עבודה בארה״ב
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero-foreground text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance"
        >
          פתחת את השער.
          <br />
          עכשיו תיכנס.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-gray mt-6 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          עבודות סרוויס בארה״ב לצעירים אחרי שירות — עם כל הליווי מהרגע הראשון
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToForm}
          className="mt-10 bg-gold text-gold-foreground font-semibold text-base px-10 py-4 rounded-sm transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
        >
          אני רוצה לשמוע עוד
        </motion.button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold opacity-40" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-text-gray rounded-full flex justify-center pt-1.5 opacity-50">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-text-gray"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
