import { motion } from "framer-motion";

const features = [
  { emoji: "🎓", title: "לימוד העבודה פרונטלי", desc: "תקבל הכשרה יסודית פנים-אל-פנים בתחום שלך — לא סרטוני יוטיוב, אלא מקצוענים שמלמדים אותך בשטח" },
  { emoji: "💬", title: "לימוד מכירות עם לידים אמיתיים", desc: "תלמד טכניקות מכירה ותעבוד עם לידים חמים אמיתיים מהיום הראשון — לא תרגולים, לידים שמביאים כסף" },
  { emoji: "📈", title: "אופציות קידום והכנסה אמיתית", desc: "הצטיינת? תתקדם. השמיים הם הגבול — קידום לניהול צוות, עמלות גבוהות, ושכר שגדל עם התוצאות שלך" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const ProgramSection = () => (
  <section className="py-24 md:py-32 bg-navy-dark">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease }}
        className="text-navy-dark-foreground text-3xl md:text-4xl font-black mb-16 text-center text-balance"
      >
        זה לא סתם עבודה. זו הכשרה אמיתית.
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className="border-t-[3px] border-gold pt-6"
          >
            <span className="text-3xl block mb-4">{f.emoji}</span>
            <h3 className="text-lg font-bold text-navy-dark-foreground mb-3">{f.title}</h3>
            <p className="text-navy-dark-foreground/50 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramSection;
