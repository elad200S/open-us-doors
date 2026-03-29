import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const cards = [
  {
    emoji: "🏅",
    title: "אחרי שירות צבאי",
    desc: "גיל 20–26",
  },
  {
    emoji: "🚗",
    title: "רישיון נהיגה בתוקף",
    desc: "חובה",
  },
  {
    emoji: "🗣️",
    title: "אנגלית בסיסית",
    desc: "לא חייב להיות שוטף",
  },
  {
    emoji: "🌍",
    title: "אזרחות מתאימה",
    desc: "תנאים מועדפים",
    highlighted: true,
    badge: "הטבה מיוחדת",
  },
];

const RequirementsSection = () => (
  <section className="py-24 md:py-32 bg-secondary">
    <div className="max-w-6xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease }}
        className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 text-center"
      >
        דרישות קדם
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="text-navy text-3xl md:text-4xl font-black mb-16 text-center"
      >
        מי יכול להצטרף?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
            className={`relative rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              card.highlighted
                ? "bg-background border-2 border-gold shadow-md"
                : "bg-background border border-border shadow-sm"
            }`}
          >
            {card.highlighted && card.badge && (
              <span className="absolute -top-3 right-1/2 translate-x-1/2 bg-gold text-gold-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                {card.badge}
              </span>
            )}

            <div className="text-4xl mb-5 flex justify-center">
              <span>{card.emoji}</span>
            </div>

            <h3 className="text-lg font-bold text-navy mb-1">{card.title}</h3>
            <p className="text-text-secondary text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RequirementsSection;
