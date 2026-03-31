import { motion } from "framer-motion";

const BottomCTA = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToForm}
          className="bg-cta-blue hover:bg-cta-blue/90 text-white text-lg md:text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          רוצה להרוויח איתנו כסף
        </motion.button>
      </div>
    </section>
  );
};

export default BottomCTA;
