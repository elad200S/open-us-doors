import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "ממלא טופס", desc: "30 שניות, בלי בירוקרטיה" },
  { num: "02", title: "שיחת ייעוץ חינמית", desc: "נסביר הכל ונבדוק התאמה" },
  { num: "03", title: "יוצא לעבוד", desc: "אנחנו מטפלים בכל השאר" },
];

const HowItWorksSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-navy text-3xl md:text-4xl font-black mb-16 text-center"
      >
        איך זה עובד?
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-0">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`py-8 md:px-8 ${i < 2 ? "md:border-l border-b md:border-b-0 border-border" : ""}`}
          >
            <span className="text-cta-blue text-4xl font-black tracking-tight block mb-4">{s.num}</span>
            <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
