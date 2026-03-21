import { motion } from "framer-motion";

const jobs = [
  { emoji: "🚪", title: "Garage Door", desc: "התקנה ותיקון דלתות מוסך, אחד השווקים החמים בארה״ב" },
  { emoji: "🔑", title: "Locksmith", desc: "מנעולנות ומערכות אבטחה — עבודה שתמיד יש לה ביקוש" },
  { emoji: "🌬️", title: "Air Duct", desc: "ניקוי וטיפול במערכות אוורור — עונה שיא עם הכנסות גבוהות" },
  { emoji: "🏠", title: "Chimney", desc: "ניקוי וחידוש ארובות — תחום מתמחה עם מרווח רווח גבוה" },
  { emoji: "🛒", title: "Shopping Carts", desc: "ניהול ותחזוקת עגלות קניות — כניסה קלה לשוק האמריקאי" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const JobTypesSection = () => (
  <section className="py-24 md:py-32 bg-background border-t-[6px] border-usa-red">
    <div className="max-w-6xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease }}
        className="text-navy text-xs font-bold tracking-[0.2em] uppercase mb-4 text-center"
      >
        מה אנחנו מציעים
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="text-navy text-3xl md:text-4xl font-black mb-16 text-center"
      >
        תחומי העבודה שלנו בארה״ב
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((j, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
            className="border-r-4 border-navy bg-background rounded-lg p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-shadow duration-300"
          >
            <span className="text-3xl block mb-4">{j.emoji}</span>
            <h3 className="text-lg font-bold text-navy mb-2">{j.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{j.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JobTypesSection;
